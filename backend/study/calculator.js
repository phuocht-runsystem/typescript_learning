function calculateInvestment(data) {
    var initialAmount = data.initialAmount, annualContribution = data.annualContribution, expectedReturn = data.expectedReturn, duration = data.duration;
    if (initialAmount < 0) {
        return 'initialAmount < 0';
    }
    if (duration <= 0) {
        return 'Invalid duration';
    }
    if (expectedReturn < 0) {
        return 'expectedReturn must be at least zero';
    }
    var total = initialAmount;
    var totalContributions = 0;
    var totalInterestEarned = 0;
    var annualResults = [];
    for (var i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: "Year ".concat(i + 1),
            totallAmount: total,
            totalContributions: totalContributions,
            totalInterestEarned: totalInterestEarned,
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var yearEndResult = results_1[_i];
        console.log(yearEndResult.year);
        console.log("yearEndResult");
        console.log("total: ".concat(yearEndResult.totallAmount.toFixed(0)));
        console.log("total contributions: ".concat(yearEndResult.totalContributions.toFixed(0)));
        console.log("total interest earned: ".concat(yearEndResult.totalInterestEarned.toFixed(0)));
        console.log('----------------------------');
    }
}
var investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
};
var results = calculateInvestment(investmentData);
printResults(results);
