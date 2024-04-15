function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            // Swap arr[j] and arr[j - 1]
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
        }
    }
    return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", array);
console.log("Sorted Array:", insertionSort(array));
