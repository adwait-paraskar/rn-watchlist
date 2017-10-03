const stocks = (state = allStocks, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default stocks;

const allStocks = [
  {
    id: 1,
    name: 'Apple Inc',
    ticker: 'AAPL',
    logo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    id: 2,
    name: 'Alphabet Inc',
    ticker: 'GOOGL',
    logo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    id: 3,
    name: 'Microsoft Corporation',
    ticker: 'MSFT',
    logo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    id: 4,
    name: 'Facebook Inc',
    ticker: 'FB',
    logo: 'https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png'

  },
  {
    id: 5,
    name: 'Amazon Inc',
    ticker: 'AMZN',
    logo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    id: 6,
    name: 'General Electric Co',
    ticker: 'GE',
    logo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    id: 7,
    name: 'Johnson N Johnson',
    ticker: 'JNJ',
    logo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    id: 8,
    name: 'Exxon Mobil Corp',
    ticker: 'XOM',
    logo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    id: 9,
    name: 'JPMorgan Chase & Co',
    ticker: 'JPM',
    logo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    id: 10,
    name: 'Wells Fargo & Co.',
    ticker: 'WFC',
    logo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    id: 11,
    name: 'Bank of America Corp.',
    ticker: 'BAC',
    logo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    id: 12,
    name: 'Infosys Ltd.',
    ticker: 'INFY',
    logo: 'https://facebook.github.io/react/img/logo_og.png'
  }
];
