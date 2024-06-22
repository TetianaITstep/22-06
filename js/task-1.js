const arr1 = [2200, 34000, 1200];
const arr2 = [120000, 34000, 7000];
const arr3 = [1100, 56000, 2700];

// const allSales = [];
// for (let i = 0; i < arr1.length; i++) {
//     allSales.push(arr1[i]);
// }
// for (let i = 0; i < arr2.length; i++) {
//     allSales.push(arr2[i]);
// }
// for (let i = 0; i < arr3.length; i++) {
//     allSales.push(arr3[i]);
// }

const allSales = [...arr1, ...arr2, ...arr3];

let minSale = allSales[0];

for (let i = 1; i < allSales.length; i++) {
  if (allSales[i] < minSale) {
    minSale = allSales[i];
  }
}

console.log(minSale);
