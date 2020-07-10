function isBalanced(str) { //{[()[]]}
    let map = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    let closing_list = Object.values(map);
    let opening_list = Object.keys(map);

    if (str.length == 0) {
        console.log('wrong input')
    }

    let stack = [] // keep track of parsed brackets

    let i=0;
    while(i< str.length) {
        let bracket = str.charAt(i)
        if (closing_list.indexOf(bracket) > -1) {
            let prev = stack.pop();
            //console.log(prev)
            if (map[prev] === bracket) {
                i++;
                continue;
            } else {
                return false;
            }
        }
        stack.push(bracket);
        //console.log(stack)
        i++;
    }
    //console.log('stack');
    //console.log(stack);
    if(stack.length) {
        return false;
    }
    return true;
}

console.log(isBalanced('{[()]}')); // true
console.log(isBalanced('')); // wrong input
console.log(isBalanced(']')); //false
console.log(isBalanced('{[()()]}')); // true
console.log(isBalanced('{[(])}')); //false
console.log(isBalanced('{{[[(())]]}}')); //true