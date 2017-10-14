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
    logo: 'https://www.seeklogo.net/wp-content/uploads/2012/12/apple-classic-logo-vector.png'
  },
  {
    id: 2,
    name: 'Alphabet Inc',
    ticker: 'GOOGL',
    logo: 'https://www.seeklogo.net/wp-content/uploads/2015/09/google-favicon-vector.png'
  },
  {
    id: 3,
    name: 'Microsoft Corporation',
    ticker: 'MSFT',
    logo: 'https://www.seeklogo.net/wp-content/uploads/2012/08/new-microsoft-logo-2012-logo-vector-01.png'
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
    logo: 'https://www.seeklogo.net/wp-content/uploads/2016/10/amazon-logo-preview.png'
  },
  {
    id: 6,
    name: 'General Electric Co',
    ticker: 'GE',
    logo: 'https://www.seeklogo.net/wp-content/uploads/2011/08/general-electric-logo-vector.png'
  },
  {
    id: 7,
    name: 'Johnson N Johnson',
    ticker: 'JNJ',
    logo: 'https://www.seeklogo.net/wp-content/uploads/2011/08/johnson-johnson-logo-vector.png'
  },
  {
    id: 8,
    name: 'Exxon Mobil Corp',
    ticker: 'XOM',
    logo: 'https://www.seeklogo.net/wp-content/uploads/2012/04/exxon-mobil-logo-vector.png'
  },
  {
    id: 9,
    name: 'JPMorgan Chase & Co',
    ticker: 'JPM',
    logo: 'https://www.seeklogo.net/wp-content/uploads/2013/02/jpmorgan-vector-logo.png'
  },
  {
    id: 10,
    name: 'Wells Fargo & Co.',
    ticker: 'WFC',
    logo: 'https://www.seeklogo.net/wp-content/uploads/2012/05/wells-fargo-logo-vector-01.png'
  },
  {
    id: 11,
    name: 'Bank of America Corp.',
    ticker: 'BAC',
    logo: 'https://www.seeklogo.net/wp-content/uploads/2013/08/bank-of-america-eps-vector-logo.png'
  },
  {
    id: 12,
    name: 'Infosys Ltd.',
    ticker: 'INFY',
    logo: 'https://www.seeklogo.net/wp-content/uploads/2014/01/infosys-limited-vector-logo.png'
  }
];
