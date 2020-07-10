//reference: https://www.facebook.com/careers/life/sample_interview_questions
//https://en.wikipedia.org/wiki/Look-and-say_sequence

//write a function to accept a number and print its look and say sequence 

function lookAndSay(input) {
    let out='';
    if (input.length == 0) {
        return 'empty input'
    }
    let i=0;
    while (i < input.length) {
        let char = input.charAt(i);
        let count = 0;
        while(char==input.charAt(i)) {
            count++;
            i++
        }
        out += `${count}${char}`
    }
    return out;
}

console.log(lookAndSay('1122'));