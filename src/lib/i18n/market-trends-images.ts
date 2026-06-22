export function getMarketTrendsArticleImage(sectionId: string, articleId: string): string {
  return `/images/knowledge/mt/${sectionId}/${articleId}.jpg`;
}

export function getMarketTrendsHubImage(sectionId: string): string {
  if (sectionId === "marktberichte") {
    return "/images/knowledge/market-reports-hub.jpg";
  }
  return `/images/knowledge/mt-hub-${sectionId}.jpg`;
}

export function getMarketTrendsHeroImage(sectionId: string): string {
  return `/images/knowledge/mt-hero-${sectionId}.jpg`;
}

export function getMarketTrendsEditorialImage(sectionId: string): string {
  return `/images/knowledge/mt-editorial-${sectionId}.jpg`;
}
