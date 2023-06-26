function highestPalindrome(string, k) {
    
    // Mengecek apakah string yang diberikan adalah palindrome
    function isPalindrome(str) {
        if (str.length <= 1) {
            return true;
        }
        
        if (str[0] !== str[str.length - 1]) {
            return false;
        }

        return isPalindrome(str.slice(1, -1));
    }
  
    // Mengecek apakah sebuah angka merupakan palindrome
    function isNumberPalindrome(num) {
        return isPalindrome(num.toString());
    }
  
    // Mengganti karakter pada posisi tertentu dengan karakter baru
    function replaceChar(str, index, char) {
      return str.substring(0, index) + char + str.substring(index + 1);
    }
  
    // Mencari highest palindrome dengan melakukan rekursi dan penggantian karakter
    function findHighestPalindrome(str, k) {
      // Jika sudah tidak ada kesempatan penggantian karakter, periksa apakah string tersebut palindrome
      if (k === 0) {
        if (isNumberPalindrome(str)) {
            return parseInt(str);
        }
        return -1;
      }
  
      const length = str.length;
      const leftChar = str[length - 1 - k];
      const rightChar = str[k];
  
      // Jika kedua karakter pada posisi yang sama sudah sama, lanjutkan rekursi tanpa melakukan penggantian karakter
      if (leftChar === rightChar) {
        return findHighestPalindrome(str, k - 1);
      }
  
      const leftPalindrome = findHighestPalindrome(replaceChar(str, k, leftChar), k - 1);
      const rightPalindrome = findHighestPalindrome(replaceChar(str, length - 1 - k, rightChar), k - 1);
  
      // Jika tidak ditemukan palindrome setelah melakukan penggantian karakter
      if (leftPalindrome === -1 && rightPalindrome === -1) {
        return -1;
      }
  
      // Mencari highest palindrome dari hasil penggantian karakter
      return Math.max(leftPalindrome, rightPalindrome);
    }
  
    return findHighestPalindrome(string, k);
  }
  
// Contoh penggunaan fungsi
const string = '3943';
const k = 1;
const result = highestPalindrome(string, k);
console.log(result);