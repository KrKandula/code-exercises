/**
 * @param {number} num
 * @return {string}
 */

//leet code, https://leetcode.com/explore/interview/card/amazon/76/array-and-strings/481/
// Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

// Example:
// Input: 123
// Output: "One Hundred Twenty Three"
// Input: 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Input: 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// Input: 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

// Solution Time complexity: O(n) ? 

map = {
    0: '',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty', 70: 'Seventy', 80: 'Eighty', 90: 'Ninety',
    100: 'Hundred',
    1000: 'Thousand',
    1000000: 'Million',
    1000000000: 'Billion',
   
}

var numberToWords = function(num) {
    if (num==0) {
        return 'Zero'
    } else {
        return utilNumberToWords(num);
    }
};

function utilNumberToWords(num) {
     if (num<20) {
        return map[num];
    }
    else if(num < 100) {
        let dividend = Math.floor(num/10);
        let divisor = 10;
        let remainder = num%10;
        return (map[dividend*10] + ' ' + map[remainder]).trim();
    } else if (num < 1000) {
        let divisor = 100;
        let dividend = Math.floor(num/divisor);
        let remainder = num%(divisor);
        console.log(remainder);
        
        return (utilNumberToWords(dividend) + ' ' + map[divisor] + ' ' +utilNumberToWords(remainder)).trim()
    } else if (num < 1000000) {
        let divisor = 1000;
        let dividend = Math.floor(num/divisor);
        let remainder = num%(divisor);
        return (utilNumberToWords(dividend) + ' ' + map[divisor] + ' ' + utilNumberToWords(remainder)).trim()
    }   else if (num < 1000000000) {
        let divisor = 1000000;
        let dividend = Math.floor(num/divisor);
        let remainder = num%(divisor);
        return (utilNumberToWords(dividend) + ' ' + map[divisor] + ' ' +utilNumberToWords(remainder)).trim()
    } else if (num >= 1000000000 && num < 5000000000) {
        let divisor = 1000000000;
        let dividend = Math.floor(num/divisor);
        let remainder = num%(divisor);
        return (utilNumberToWords(dividend) + ' ' + map[divisor] + ' ' +utilNumberToWords(remainder)).trim()
    }
    if(map[num]) {
        return map[num];
    }
}