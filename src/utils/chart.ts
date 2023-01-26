export const parseCoinGeckoChartData = (priceList: number[][]) => {
  const candelCloseIndex = 4;
  const timestampIndex = 0;
  return priceList
    .slice(-100)
    .filter(
      priceData => priceData[candelCloseIndex] && priceData[timestampIndex],
    )
    .map(priceData => ({
      price: priceData[candelCloseIndex],
      date: String(new Date(priceData[timestampIndex]).toISOString()),
    }));
};
