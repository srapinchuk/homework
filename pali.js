const string = ('madam');
const value = checkPalindrome(string);

function checkPalindrome(input) {
    const len = input.length;
    for (let i = 0; i < len / 2; i++) {
        if (input[i] !== input[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

console.log(value);