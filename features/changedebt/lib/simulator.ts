const rateFinaura = 19.9;

export function calculatedSimulatedPaymentsConsolidated(rateBank: number, amount: number, months: number) {
    return [
        { name: 'finaura', ...calculateResults(rateFinaura, amount, months)},
        { name: 'bank', ...calculateResults(rateBank, amount, months)},
    ]
}

function calculateResults(rate: number, amount: number, months: number) {
    const monthlyRate = rate / 100 / 12;
    const payment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    const totalPayment = payment * months;
    const totalInterest = totalPayment - amount;
    return {
        monthlyPayment: payment.toFixed(2),
        totalPayment: totalPayment.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        rate: rate.toFixed(2)
    }
}