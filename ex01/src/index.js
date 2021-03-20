function MyRecursion(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return MyRecursion(arr, n - 1) + arr[n - 1];
    }
}
console.log(MyRecursion([1], 0));
console.log(MyRecursion([1, 2, 3, 4], 2));
console.log(MyRecursion([1, 2, 3, 4], 3));
console.log(MyRecursion([1, 2, 3, 4, 5, 6], 5));
module.exports = MyRecursion;