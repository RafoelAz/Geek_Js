let numb = Math.floor(Math.random() * 1000);
console.log(numb);

if (numb < 1000 && numb >= 0) {
  let hundreds = Math.floor(numb / 100);
  let dozens = Math.floor((numb - 100 * hundreds) / 10);
  let units = numb - (hundreds * 100 + dozens * 10);
  let result = {
    hundreds: hundreds,
    dozens: dozens,
    units: units,
  };
  console.log(result);
} else {
  let mistakeNumb = {
    err: "mistake",
  };
  console.log(mistakeNumb);
}

let basket = [
  {
    id: "1",
    name: "bicycle1",
    price: 1000,
  },
  {
    id: "2",
    name: "bicycle2",
    price: 2000,
  },
  {
    id: "3",
    name: "bicycle3",
    price: 3000,
  },
];

//let countBasketPrice = 0;
//for (let i = 0; i < basket.length; i++) {
//  countBasketPrice += basket[i].price;
//}
//console.log(countBasketPrice);

const countBasketPrice = basket.reduce((sum, cost) => {
  return sum + cost.price;
}, 0);
console.log(countBasketPrice);
