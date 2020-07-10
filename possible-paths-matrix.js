//possible number of ways to a point 

let paths;

function possiblePaths(x, y) {
    if (x==1|| y==1) {
        return 1;
    }
    if (typeof paths[x][y] !== 'undefined') {
        return paths[x][y]
    }
    paths[x][y] = possiblePaths(x-1, y) + possiblePaths(x, y-1);
    return paths[x][y];
}

function possiblePathsUtil(m, n) {
        paths = new Array(m)
        for(let i=1;i<=m;i++) {
            paths[i] = []
        }
        return possiblePaths(m, n)
}

console.log(possiblePathsUtil(100, 100));

