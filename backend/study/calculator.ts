type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type InvestmentResult = {
  year: string;
  totallAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
  const { initialAmount, annualContribution, expectedReturn, duration } = data;

  if (initialAmount < 0) {
    return 'initialAmount < 0';
  }

  if (duration <= 0) {
    return 'Invalid duration';
  }

  if (expectedReturn < 0) {
    return 'expectedReturn must be at least zero';
  }

  let total = initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  const annualResults: InvestmentResult[] = [];

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn);
    totalInterestEarned = total - totalContributions - initialAmount;
    totalContributions = totalContributions + annualContribution;
    total = total + annualContribution;

    annualResults.push({
      year: `Year ${i + 1}`,
      totallAmount: total,
      totalContributions,
      totalInterestEarned,
    });
  }

  return annualResults;
}

function printResults(results: CalculationResult) {
  if (typeof results === 'string') {
    console.log(results);
    return;
  }

  for (const yearEndResult of results) {
    console.log(yearEndResult.year);
    console.log(`yearEndResult`);
    console.log(`total: ${yearEndResult.totallAmount.toFixed(0)}`);
    console.log(
      `total contributions: ${yearEndResult.totalContributions.toFixed(0)}`,
    );
    console.log(
      `total interest earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`,
    );
    console.log('----------------------------');
  }
}

const investmentData: InvestmentData = {
  initialAmount: 5000,
  annualContribution: 500,
  expectedReturn: 0.08,
  duration: 10,
};

const results = calculateInvestment(investmentData);

printResults(results);
