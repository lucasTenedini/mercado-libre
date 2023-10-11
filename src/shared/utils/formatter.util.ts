export const formatNumberToCurrency = (currency: string, value: number): string => {
    return value?.toLocaleString('es-ar', {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

};