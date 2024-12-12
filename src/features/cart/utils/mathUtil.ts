// falta test
export const roundToTwoDecimals = (value: number): number => {
    const PERCENTAGE_FACTOR = 100;
    return Math.round(value * PERCENTAGE_FACTOR) / PERCENTAGE_FACTOR;
};