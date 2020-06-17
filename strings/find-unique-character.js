//Problem: Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
// Examples:
// s = "friday"
// return 0.
// s = "freakyfriday",
// return 2.
//Implemenatation: 1. Iterate through each character in the string and store the occurance count and latest position.
//2. After building the map, iterate through the map to find the first key having object with count 1, and it's position 
//needs to be returned
//Time Complexity: The String length is iterated two times, and hence it will be 2n, O(n)

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    for(let i=0; i<s.length; i++) {
        let char = s[i];
        if (typeof map[char] == 'undefined') {
            let obj = {}
            obj.count = 1;
            obj.position = i;
            map[char] = obj;
        }
        else {
            map[char]['position'] = i;
           map[char]['count'] = map[char]['count'] + 1;
        }
    }
    
    let key;
    for(let i in map) {
        if(!Object.hasOwnProperty(i)) {
            if (map[i]['count'] == 1) {
                key = i;
                break;
            }
        }
    }
    return map[key] ? map[key]['position'] : -1;
    
};

console.log(firstUniqChar('friday'));
console.log(firstUniqChar('freakyfriday'));