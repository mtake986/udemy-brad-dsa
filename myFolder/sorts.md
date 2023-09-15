# bubble sort
隣り合う要素を比較していき、大きい値を後ろに移動させていくソート
```js
function bubbleSort(arr) {
  //Outer pass
  let steps = 0
  for (let i = 0; i < arr.length; i++) {
    //Inner pass
    for (let j = 0; j < arr.length - i - 1; j++) {
      //Value comparison using ascending order
      console.log(arr[j + 1], arr[j]);
      if (arr[j + 1] < arr[j]) {
        //Swapping
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return {arr, steps};
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
```
Worst-case time complexity: Big O (n^2).
Average-case time complexity: Big theta (n^2).
Best-case time complexity: Big omega (n).
Space complexity: Big O (1).

# insertion Sort
インデックス順にソートされた配列に要素を挿入していくソート
```js

function insertionSort(arr) {
  //Start from the second element.
  for (let i = 1; i < arr.length; i++) {
    //Go through the elements behind it.
    for (let j = i - 1; j > -1; j--) {
      //value comparison using ascending order.
      if (arr[j + 1] < arr[j]) {
        //swap
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  return arr;
}

console.log(insertionSort([23, 1, 10, 5, 2]));
```

Worst-case time complexity: Big O(n^2).
Average-case time complexity: Big theta (n^2).
Best-case time complexity: Big omega (n).
Space complexity: Big O (1).



# Selection Sort
小さな値を選択していくソート
```js
function selectionSort(arr) {
  let min;

  //start passes.
  for (let i = 0; i < arr.length; i++) {
    //index of the smallest element to be the ith element.
    min = i;

    //Check through the rest of the array for a lesser element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    //compare the indexes
    if (min !== i) {
      //swap
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));
```

Worst-case time complexity: Big O(n^2).
Average-case time complexity: Big theta (n^2).
Best-case time complexity: Big omega (n).
Space complexity: Big O (1).



# Merge Sort
分割統治法を用いたソート 
Divide and Conquer: The algorithm accomplishes its task by dividing the problem into smaller subproblems and solving them to come up with the overall solution.
動画説明：https://www.youtube.com/watch?v=JSceec-wEyw
```js
// my code
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.ceil(arr.length / 2);

  console.log(mid)
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  console.log(left, right);

  mergeSort(left);
  mergeSort(right);
  return mid;
}

console.log(mergeSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));

// code from the video
//merging two arrays appropriately.
function merge(arr1, arr2) {
  //make a new array and have two value pointers
  let res = [],
    i = 0,
    j = 0;

  //sorting the first array.
  if (arr1.length > 1) {
    let min = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (i !== min) {
        if (arr1[i] < arr1[min]) {
          //also swap the elements
          [arr1[i], arr1[min]] = [arr1[min], arr1[i]];
          //change the minimum
          min = i;
        }
      }
    }
  }

  //sorting the second array.
  if (arr2.length > 1) {
    let min = 0;
    for (let i = 0; i < arr2.length; i++) {
      if (i !== min) {
        if (arr2[i] < arr2[min]) {
          //also swap the elements
          [arr2[i], arr2[min]] = [arr2[min], arr2[i]];
          //change the minimum
          min = i;
        }
      }
    }
  }

  //Value comparison.
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  //pushing the rest of arr1.
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  //pushing the rest of arr2.
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  return res;
}

//merge sort
function mergeSort(arr) {
  //Best case
  if (arr.length <= 1) return arr;

  //splitting into halves
  let mid = Math.ceil(arr.length / 2);

  let arr1 = arr.slice(0, mid);

  let arr2 = arr.slice(mid);

  let arr1_subarrays = [],
    sorted_arr1_subarrays = [];

  let arr2_subarrays = [],
    sorted_arr2_subarrays = [];

  //loop through array 1 making subarrays of two elements
  for (let i = 0; i < arr1.length; i += 2) {
    arr1_subarrays.push(arr1.slice(i, i + 2));
  }

  //loop through array 2 making subarrays of two elements.
  for (let i = 0; i < arr2.length; i += 2) {
    arr2_subarrays.push(arr2.slice(i, i + 2));
  }

  // sorting each subarray of arr1.
  for (let i = 0; i < arr1_subarrays.length; i += 2) {
    let result = merge(arr1_subarrays[i], arr1_subarrays[i + 1]);
    result.forEach((value) => sorted_arr1_subarrays.push(value));
  }

  // sorting each subarray of arr2.
  for (let i = 0; i < arr2_subarrays.length; i += 2) {
    let result = merge(arr2_subarrays[i], arr2_subarrays[i + 1]);
    result.forEach((value) => sorted_arr2_subarrays.push(value));
  }

  let result = merge(sorted_arr1_subarrays, sorted_arr2_subarrays);

  return result;
}

console.log(mergeSort([70, 50, 30, 10, 20, 40, 60]));
```

Worst-case time complexity: Big O (n * log n).
Average-case time complexity: Big theta (n * log n).
Best-case time complexity: Big omega (n * log n).
Space complexity: Big O (n).




# Quick Sort
ピボットを選択して、それより小さい値と大きい値に分けていくソート

```js
function partition(items, left, right) {
  //rem that left and right are pointers.

  let pivot = items[Math.floor((right + left) / 2)],
    i = left, //left pointer
    j = right; //right pointer

  while (i <= j) {
    //increment left pointer if the value is less than the pivot
    while (items[i] < pivot) {
      i++;
    }

    //decrement right pointer if the value is more than the pivot
    while (items[j] > pivot) {
      j--;
    }

    //else we swap.
    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]];
      i++;
      j--;
    }
  }

  //return the left pointer
  return i;
}

function quickSort(items, left, right) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right); //get the left pointer returned

    if (left < index - 1) {
      //more elements on the left side
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      //more elements on the right side
      quickSort(items, index, right);
    }
  }

  return items; //return the sorted array
}
let items = [5, 3, 7, 6, 2, 9];

console.log(quickSort(items, 0, items.length - 1));


```

Worst-case time complexity: Big O(n^2).
Average-case time complexity: Big theta (n^2).
Best-case time complexity: Big omega (n).
Space complexity: Big O (1).

