"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function memoize(memo, formula) {
    const recur = (n) => {
        if (typeof memo[n] === 'number') {
            return memo[n];
        }
        memo[n] = formula(recur, n);
        return memo[n];
    };
    return recur;
}
exports.factorial = memoize([1], (recur, n) => n * recur(n - 1));
exports.fibonacci = memoize([0, 1], (recur, n) => recur(n - 1) + recur(n - 2));
//# sourceMappingURL=foo.js.map