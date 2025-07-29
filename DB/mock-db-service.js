export class MetricsService {
  constructor() {
    // Simulated in-memory data store
    this.data = {
      platformCommission: {
        totalGrossRevenueCents: 15000000,
        totalCommissionCents: 3000000,
        lastUpdated: new Date().toISOString(),
      },
      overallMetrics: {
        totalUsers: 1200,
        totalSubscriptions: 800,
        totalAddOnSales: 150,
        totalProTrials: 200,
        lastUpdated: new Date().toISOString(),
      },
    };
  }

  // Get platform commission metrics
  async getPlatformCommissionMetrics() {
    return {
      totalGrossRevenueCents:
        this.data.platformCommission.totalGrossRevenueCents,
      totalCommissionCents: this.data.platformCommission.totalCommissionCents,
      metadata: {
        lastUpdated: this.data.platformCommission.lastUpdated,
        currency: "USD",
      },
    };
  }

  async getOverallMetrics() {
    return {
      totalUsers: this.data.overallMetrics.totalUsers,
      totalSubscriptions: this.data.overallMetrics.totalSubscriptions,
      totalAddOnSales: this.data.overallMetrics.totalAddOnSales,
      totalProTrials: this.data.overallMetrics.totalProTrials,
      metadata: {
        lastUpdated: this.data.overallMetrics.lastUpdated,
      },
    };
  }
}
