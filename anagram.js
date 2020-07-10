//company: facebook

// abba , baab // true
// abbba, abba // false
// aaa, a // false
// aaaab, abaaa // true

// '', aaa //false
// aa, ''
// '', '' // false - speacial


//method one - hash map
function isAnagram(str1, str2) { // abba , baab // true
    map1 = {}; //{a: 2, b:2}
    map2 = {};

    if (!str1 || !str2) {
        console.log('invalid arguments provided, args should be non-empty strings')
        return false;
    }
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i=0; i<str1.length; i++) {
        if ( typeof map1[str1.charAt(i)] == 'undefined') {
            map1[str1.charAt(i)] = 0; // map['a'] = 0
        } 
        map1[str1.charAt(i)]++;
    }

    for (let i=0; i<str2.length; i++) {
        if ( typeof map2[str2.charAt(i)] == 'undefined') {
            map2[str2.charAt(i)] = 0; // map['a'] = 0
        } 
        map2[str2.charAt(i)]++;
    }
    //console.log(map1); console.log(map2);

    for(let char in map1) { //forOwnProperty
        //if (map1.hasOwnProperty(char)) {
            if (map1[char] !== map2[char]) {
                return false;
            }
        //}
    }
    return true;
}


console.log(isAnagram('abbaa', 'baab')) //false
console.log(isAnagram('abba', 'baab')) //true
console.log(isAnagram('aaaab', 'abaac')) //false
console.log(isAnagram('def', 'fde')) //false

//second method2
function isAnagram_2(str1, str2) {
    if(str1.length !== str2.length) 
        return false;

    let counter=0;
    for(let i=0; i<str1.length && counter<str1.length; i++) {
        let char = str1.charAt(i);
        let regex = new RegExp(char, 'g');
        if (str1.match(regex).length !== (str2.match(regex) && str2.match(regex).length)) {
            return false;
        }
        counter += str1.match(regex).length;
    }
    return true;
}
console.log('=========================')
console.log(isAnagram_2('abbaa', 'baab')) //false
console.log(isAnagram_2('abba', 'baab')) //true
console.log(isAnagram_2('aaaab', 'abaac')) //false
console.log(isAnagram_2('def', 'fde')) //true


// anagramIndexOf(abcdefgh , fed) //-1
// anagramIndexOf(abcdefgh , xyz) //0
// anagramIndexOf(abcdefgh , fgh) //false
//                01234567  
function anagramIndexOf (hay, needle) {
    
    for(let i=0; i<=hay.length-needle.length; i++) {
        if ( isAnagram_2(hay.substr(i, needle.length), needle) ) {
            return i;
        } 
    }
    return -1;
}
console.log(anagramIndexOf('abcdefgh', 'fed'));

