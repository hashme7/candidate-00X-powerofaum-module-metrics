import express, { json, urlencoded } from "express";
import cors from "cors";
import { MetricsService } from "./DB/mock-db-service.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://powerofaum.com", "https://admin.powerofaum.com"]
        : "*",
    credentials: true,
  })
);
app.use(json({ limit: "10mb" }));
app.use(urlencoded({ extended: true }));

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path} - IP: ${req.ip}`);
  next();
});

const metricsService = new MetricsService();

app.get("/api/platform-commission-metrics", async (req, res) => {
  try {
    const metrics = await metricsService.getPlatformCommissionMetrics();

    const response = {
      totalGrossRevenueCents: metrics.totalGrossRevenueCents,
      totalCommissionCents: metrics.totalCommissionCents,
    };

    res.status(200).json(response);

    // Log successful request
    console.log(
      `Platform commission metrics served: ${JSON.stringify(response)}`
    );
  } catch (error) {
    console.error("❌ Error fetching platform commission metrics:", error);
  }
});

app.get("/api/overall-metrics", async (req, res) => {
  try {
    const metrics = await metricsService.getOverallMetrics();
    const response = {
      totalUsers: metrics.totalUsers,
      totalSubscriptions: metrics.totalSubscriptions,
      totalAddOnSales: metrics.totalAddOnSales,
      totalProTrials: metrics.totalProTrials,
    };

    res.status(200).json(response);
    console.log(`Overall metrics served: ${JSON.stringify(response)}`);
  } catch (error) {
    console.error("Error fetching overall metrics:", error);
  }
});
app.listen(PORT, () => {
  console.log(" PowerOfAum Backend API Server Started");
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
