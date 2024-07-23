const selection_sort = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        // Swap arr[i - 1] and arr[i]
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
    n--; // Reduce the range to check
  } while (swapped);

  return arr;
}

let unsorted = [65, 25, 97, 10, 66];
console.log("unsorted array:", unsorted);

let sorted = selection_sort(unsorted);
console.log("sorted array: ", sorted);

let sortedArr = bubbleSort(arr);
console.log("Sorted array:", sortedArr);

//Both have a time complexity of O(n²) in the average and worst cases, but Bubble Sort can be optimized to O(n) for the best case when the list is already sorted.
