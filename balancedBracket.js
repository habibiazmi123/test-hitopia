function isBalancedBracket(str) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    const matchingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const topBracket = stack.pop();

            if (topBracket !== matchingBrackets[char]) {
                return 'NO';
            }
        }
    }

    return stack.length === 0 ? 'YES' : 'NO';
}
  
// Contoh penggunaan fungsi
const example1 = '{[()]}';
const example2 = '{[(])}';
const example3 = '{(([])[])[]}';

console.log(isBalancedBracket(example1));
console.log(isBalancedBracket(example2));
console.log(isBalancedBracket(example3));