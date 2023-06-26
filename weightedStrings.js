function weightedStrings(string, queries) {
    const weights = {};

    // Menghitung bobot untuk setiap karakter dalam string
    function calculateWeights(string) {
        let currentWeight = 0;
        let prevChar = '';
        for (let i = 0; i < string.length; i++) {
            const char = string[i];
            if (char === prevChar) {
                currentWeight += char.charCodeAt(0) - 96;
            } else {
                currentWeight = char.charCodeAt(0) - 96;
            }

            weights[string.slice(0, i + 1)] = currentWeight;
            prevChar = char;
        }
    }

    calculateWeights(string);

    const result = [];

    // Mengecek status dari setiap angka di queries
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        if (weights[string] === query) {
            result.push('Yes');
        } else {
            let found = false;
            for (const substring in weights) {
                if (weights[substring] === query && substring !== string) {
                found = true;
                break;
                }
            }
            result.push(found ? 'Yes' : 'No');
        }
    }

    return result;
}
  
const string = 'abbcccd';
const queries = [1, 3, 9, 8];
const result = weightedStrings(string, queries);
console.log(result);