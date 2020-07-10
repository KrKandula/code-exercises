//Company:Vonage

// trialing zeros have to be removed and the numbers need to be grouped and evaluated for comparison
// digit is greater than number
// return true if a<=b, false otherwise 

console.log(isLess('abc900abc', 'abc001200efg')); //true
console.log(isLess('abc900abc', 'abc0012efg')); //false
console.log(isLess('abc900abc', 'abc00900def')); //true
console.log(isLess('abc900', 'abc00900')); //true
console.log(isLess('a-bc900', 
                   'abc0010')); //false

function isLess (a, b) { // is less or equals
    let aLen = a.length;
    let bLen = b.length;
    let i = 0; let j=0;
    while(i<aLen && j<bLen) {
        let isANum = a[i].match(/^\d+$/);
        let isBNum = b[j].match(/^\d+$/);
        if (isANum && isBNum) { 
            // console.log(isANum);
            // console.log(isBNum)
            let inum = i;
            let jnum = j;
            let aNum = '';
            let bNum = '';
            while(inum<a.length && a[inum].match(/^\d+$/) ) {
                aNum += a[inum]
                inum++;
            }
            while(jnum<b.length && b[jnum].match(/^\d+$/)) {
                bNum += b[jnum]
                jnum++
            }
            // console.log(aNum);
            // console.log(bNum)
            if (parseInt(aNum) > parseInt(bNum)) {
                return false;
            }
            i += aNum.length;
            j += bNum.length;
            continue; 
        } else if (isANum || isBNum) {
            // console.log(a.charAt(i))
            // console.log(b.charAt(j))
            // console.log(isANum);
            // console.log(isBNum)
            if (isANum) {
                return false
            }
        } else if (a.charAt(i) > b.charAt(j)) {
            // console.log(a.charAt(i))
            // console.log(b.charAt(j))
            return false;
        }
        i++; j++
    }
    if (i < a.length) { //meaning b is larger string
        return false;
    }
    return true;
}

