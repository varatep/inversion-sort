var arr = [8,7,6,5,4,3,2,1];
var compareCount = 0;
var inversionCount = 0;
var sort = function (A, i, j) {
    var tmp = '', k = '';
    compareCount++;
    if (A[i] > A[j]) {
        tmp = A[i];
        A[i] = A[j];
        A[j] = tmp;
        inversionCount++;
    }
    if (i + 1 >= j) {
        return;
    }
    k = Math.floor((j - i + 1) / 3);
    sort(A, i, j - k);
    sort(A, i + k, j);
    sort(A, i, j - k);
};
sort(arr,1,arr.length);
console.log("Compares: " + compareCount);
console.log("Inversions: " + inversionCount);
