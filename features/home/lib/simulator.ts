const rates = [
    {
        name: "Tasa Preferente",
        rate: 8.9,
    },
    {
        name: "Tasa Plus",
        rate: 18.5,
    },
    {
        name: "Otros Bancos",
        rate: 45.0,
    }
]

function calculateMonthlyPayment(amount: number, period: number, rate: number) {
    const rateWithIVA = rate * 1.16; // Agregar IVA al interés
    const monthlyRate = rateWithIVA / 12 / 100;
    const rateFactor = Math.pow(1 + monthlyRate, period);
    const monthlyPayment = amount * ((monthlyRate * rateFactor) / (rateFactor - 1));
    return Math.ceil(monthlyPayment);
}

export function getSimulatedPayments(amount: number, period: number) {
    return rates.map(rate => {
        return {
            title: rate.name,
            rate: `${rate.rate}%`,
            monthlyPayment: calculateMonthlyPayment(amount, period, rate.rate).toLocaleString('es-Mx', { minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'MXN' })
        }
    })
}
