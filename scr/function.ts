const add = (a : number,b: number) : string => {
    const result = a + b;
    return result.toString();
}

export const subtract = (a : number,b: number) : string => {
    const result = a - b;
    return result.toString();
}

export default add;