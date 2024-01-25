// const b = {
//   a: 10,
//   b: {
//     a: 10,
//     b: 15,
//     c: [1, 3],
//   },
// };
//
// const a = {
//   ...b,
//   b: { ...b.b, c: [...b.b.c] },
// };
//

const food = [
  { name: "Pasta", weight: 350, price: 68, quantity: 144 },
  { name: "Sparta", weight: 450, price: 88, quantity: 5 },
  { name: "Hello", weight: 350, price: 168, quantity: 1 },
  { name: "Torin", weight: 350, price: 58, quantity: 11 },
];

function getWeightAndQuantity() {
  return food.reduce(
    (acc, { price, weight, quantity }) =>
      weight > 80 && quantity < 7 ? acc + price : acc,
    0,
  );
}

console.log(getWeightAndQuantity(food));
