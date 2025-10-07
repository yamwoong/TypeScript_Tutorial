function add(num1: number, num2: number): void {
  console.log(num1 + num2);
}

// add();
// add(5);
add(5, 10);
// add(5, 10, 15);
// add("Hello, ", "world!");

function showItem(arr: number[]) {
  arr.forEach((item) => {
    console.log(item);
  });
}

showItem([1, 2, 3]);
// showItem(1, 2, 3);
