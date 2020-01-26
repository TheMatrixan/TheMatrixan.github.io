export interface PortfolioData {
  path: string;
  data: {
    categories: string[];
  };
}

const ConstPortfolio: PortfolioData[] = [
  {
    path: 'system-engineer',
    data: {
      categories: ['a'],
    },
  },
  {
    path: 'delegation-assistant',
    data: {
      categories: ['b'],
    },
  },
  {
    path: 'adventum',
    data: {
      categories: ['c'],
    },
  },
];

export { ConstPortfolio };
