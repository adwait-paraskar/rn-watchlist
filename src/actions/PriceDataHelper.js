export function getCurrentPrice(json) {
    let updated = json["Meta Data"]["3. Last Refreshed"];

    let dailySeries = json["Time Series (Daily)"];
    let lastTradedPrice = Object.values(dailySeries)[0];

    let price = lastTradedPrice["4. close"];
    let openPrice = lastTradedPrice['1. open'];
    let change = (price - openPrice).toFixed(2);
    let changePcnt = (change * 100 / openPrice).toFixed(2);

    return { price, openPrice, change, changePcnt, updated };
};

export function getChartData(json) {
    let chartData = { series: [], labels: [] };
    let dailySeries = json["Time Series (Daily)"];
    let x = 0;
    Object.keys(dailySeries)
        .slice(0, 9).
        map((key) => {            
            let y = dailySeries[key]["4. close"];
            chartData.series.push({ 'x': x++, 'y': parseFloat(y).toFixed(2) });
            chartData.labels.push(key);
        });
    return chartData;
}