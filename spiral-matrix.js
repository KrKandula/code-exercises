//given n of n*n matrix, create a spiral matrix
// input: 3
// output:
// 1 2 3
// 8 9 4
// 7 6 5

//Time complexity: O (n)
//Space complexity: O (n), size of array

function spiralMatrix(n) {
    //ready 2d matrix;
    let spiralMatrix = new Array(n);
    for(let i=0; i<n; i++) {
        spiralMatrix[i] = [];
    }

    let size = n*n;
    let top = 0;
    let bottom = n-1;
    let left = 0;
    let right = n-1;
    let counter = 1;
    while(counter <= size) {
        for(let i=left; i<=right; i++) {
            spiralMatrix[top][i] = counter;
            counter++;
        }
        top++;
        for(let i=top; i<=bottom; i++) {
            spiralMatrix[i][right] = counter;
            counter++
        }
        right--;
        for (let i=right; i>=left; i--) {
            spiralMatrix[bottom][i] = counter;
            counter++
        }
        bottom--;
        for(let i=bottom; i>=top; i--) {
            spiralMatrix[i][left] = counter;
            counter++
        }
        left++;
    }
    return spiralMatrix;
}

console.log(spiralMatrix(5))