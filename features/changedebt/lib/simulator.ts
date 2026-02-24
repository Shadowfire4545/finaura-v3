const rateFinaura = 19.9;

export function calculatedSimulatedPaymentsConsolidated(rateBank: number, amount: number, months: number) {
    return {
        bank: calculateResults(rateBank, amount, months),
        finaura: calculateResults(rateFinaura, amount, months)
    }
}

function calculateResults(rate: number, amount: number, months: number) {
    const monthlyRate = rate / 100 / 12;
    const payment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    const totalPayment = payment * months;
    const totalInterest = totalPayment - amount;
    return {
        monthlyPayment: payment,
        totalPayment,
        totalInterest
    }
}