export const findMax = (numbers: number[]) : string => {
    const max = Math.max(...numbers);
    return max.toString();
}