
function memoize(memo: number[], formula: (recur: (n: number) => number, n: number) => number) {
    const recur = (n: number) => {
        if (typeof memo[n] === 'number') {
            return memo[n];
        }
        memo[n] = formula(recur, n);
        return memo[n];
    }
    return recur;
}

export const factorial = memoize([1], (recur, n) => n * recur(n-1));
export const fibonacci = memoize([0,1], (recur, n) => recur(n-1) + recur(n-2));