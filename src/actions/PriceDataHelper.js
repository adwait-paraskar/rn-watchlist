import { NO_OF_PAST_DAYS_INDEX } from './constants';

export function getCurrentPrice (json) {
  let updated = json['Meta Data']['3. Last Refreshed'];

  let dailySeries = json['Time Series (Daily)'];
  let lastTradedPrice = Object.values(dailySeries)[0];

  let price = lastTradedPrice['4. close'];
  let open = lastTradedPrice['1. open'];
  let low = lastTradedPrice['3. low'];
  let high = lastTradedPrice['2. high'];
  let volume = lastTradedPrice['5. volume'];
  let change = (price - open).toFixed(2);
  let changePcnt = (change * 100 / open).toFixed(2);

  return { price, open, change, changePcnt, updated, high, low, volume };
}

export function getChartData (json) {
  let chartData = { series: [], labels: [] };
  let dailySeries = json['Time Series (Daily)'];
  let x = NO_OF_PAST_DAYS_INDEX;

  Object.keys(dailySeries)
    .slice(0, x)
    .map((key) => {
      let y = dailySeries[key]['4. close'];
      chartData.series.push({ 'x': x--, 'y': parseFloat(y) });
      chartData.labels.push(key.substr(-2, 2));
    });
    // required to make chart render day wise in ascending order. Same reason for x-- above
  chartData.labels.reverse();
  return chartData;
}
