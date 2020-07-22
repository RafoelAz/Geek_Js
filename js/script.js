//!_______1_______
//document.querySelector(".button").onclick = function () {
//  let tc = document.querySelector(".input").value;
//  let tf = (9 / 5) * tc + 32;
//  let out = tf + "&#8457;	";
//  document.querySelector(".output").innerHTML = out;
//  alert(tf);
//};

//let name = "Василий";
//let admin = name;
//alert(admin);

//let sum = 1000 + "108";
//console.log(`${sum} - конкатенация`);

//!_______2_______
//?1)
//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2 - добавляет единицу к значению переменной и выводит результат
//d = b++; alert(d);           // 1 - добавляет единицу к значению переменной и выводит результат до инкрементрирования
//c = (2 + ++a); alert(c);      // 5 - 'а' на данном этапе равно 2 с префиксной инкрементацией 3 и того 5
//d = (2 + b++); alert(d);      // 4 - 'b' на данном этапе равно 2 с постфиксной инкрементацией 2 и того 4

//так или иначе но переменные по два раза увеличили значение
//alert(a);                    // 3
//alert(b);                    // 3

//?2)
//var a = 2;
//var x = 1 + (a *= 2);
//то есть x = 1 + (a = a * 2)
//то есть x = 1 + (2 * 2)
//то есть x = 5

//?3)
//let a = (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 10);
//let b = (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 10);

//if (a >= 0 && b >= 0) {
//  //можно ли написать условие  так (a && b >= 0)
//  let result1 = a - b;
//  console.log(result1);
//} else if (a < 0 && b < 0) {
//  let result2 = a * b;
//  console.log(result2);
//} else if ((Math.sign(a) == 1 && Math.sign(b) == -1) || (Math.sign(a) == -1 && Math.sign(b) == 1)) {
//  //решил фигней пострадать и использовать Math.sign()
//  //можно было бы так сделать условие ? ((Math.sign(a) == (1 || 0) && Math.sign(b) == -1) || (Math.sign(a) == -1 && Math.sign(b) == (1 || 0)))
//  let result3 = a + b;
//  console.log(result3);
//} else if (a == 0 || b == 0) {
//  result3 = a + b;
//  console.log(result3);
//}
////или можно было последним условием написать (else){a + b} поскольку все другие варианты перечислены заранее ! подумал что проверяют понимание условных операторов
//?4)
//let a = +prompt("Введите число от 1 до 15");
//switch (a) {
//  case 1:
//    alert(" Число 1");
//  case 2:
//    alert(" Число 1");
//  case 2:
//    alert(" Число 2");
//  case 3:
//    alert(" Число 3");
//  case 4:
//    alert(" Число 4");
//  case 5:
//    alert(" Число 5");
//  case 6:
//    alert(" Число 6");
//  case 7:
//    alert(" Число 7");
//  case 8:
//    alert(" Число 8");
//  case 9:
//    alert(" Число 9");
//  case 10:
//    alert(" Число 10");
//  case 11:
//    alert(" Число 11");
//  case 12:
//    alert(" Число 12");
//  case 13:
//    alert(" Число 13");
//  case 14:
//    alert(" Число 14");
//  case 15:
//    alert(" Число 15");
//}
////без break чтобы все числа вывелись или можно ставить break только в каждый alert прописать числа от значения prompt до 15 ! не понял как точно надо делать !

//?5)
//let a = 20;
//let b = 10;

//function operation1(a, b) {
//  return a + b;
//}

//function operation2(a, b) {
//  return a - b;
//}

//function operation3(a, b) {
//  return a / b;
//}

//function operation4(a, b) {
//  return a + b;
//}

//?6)
//function mathOperation(arg1, arg2, operation) {
//  switch (operation) {
//    case "addition":
//      return arg1 + arg2;
//      break;
//    case "subtraction":
//      return arg1 - arg2;
//      break;
//    case "division":
//      return arg1 / arg2;
//      break;
//    case "multiplication":
//      return arg1 * arg2;
//      break;
//  }
//}

//?7)
//короче тут не просто и есть несколько вопросов !
//typeof null это Object почему ? какая совместимость данных ? почему не исправить ?
//typeof 0 это number и тут все очевидно
//так-же очевидно что при сравнении даст false ! плюс null это результат очистки значения переменной то есть 'нечего там нет' ,а вычитание самого себя оставит в переменной число ноль и это что-то!
//и еще отсюда получается вопрос null == 0 - false , а null >= 0 - true !!!!!  вот это поворот,что происходит ???

//?8)

//const power = function (val, pow) {
//  if (pow != 1) {
//    return val * power(val, pow - 1);
//  } else if (pow <= 0) {
//    alert("Чушь,еще раз!");
//  } else {
//    return val;
//  }
//};

//!_________________________________________
//function generateNumber() {
//  const arr = [];
//  while (arr.length < 4) {
//    const d = Math.floor(Math.random() * 10);
//    if (arr.indexOf(d) < 0) {
//      arr.push(d);
//    }
//  }
//  return arr.join("");
//}

//function play() {
//  const N = generateNumber();
//  console.log(N);
//  let tryCounter = 1;

//  while (true) {
//    const myAns = prompt("enter number of 4 item");
//    let bull = 0;
//    let cow = 0;

//    if (myAns === N) {
//      break;
//    }

//    for (let i = 0; i < myAns.length; i++) {
//      const symbol = myAns[i];
//      const found = N.indexOf(symbol);
//      if (found >= 0) {
//        if (found === i) {
//          bull++;
//        } else {
//          cow++;
//        }
//      }
//    }
//    console.log(`${bull} bull(s) and ${cow} cow(s)`);
//    tryCounter++;
//  }
//  alert(`You won! ${tryCounter}`);
//}

//while (true) {
//  play();
//}

//!____________3__________________

//?1)

//let num = 1;
//let numArr = [];
//while (num <= 100) {
//  if (num == 1) {
//    numArr.push(1);
//  } else {
//    let i = 2;
//    while (num % i !== 0) {
//      i++;
//    }
//    if (i == num) {
//      numArr.push(i);
//    }
//  }
//  num++;
//}
//console.log(numArr);

//let n = 100;
//let numb1 = [];
//numb: for (let i = 1; i <= n; i++) {
//  for (let j = 2; j < i; j++) {
//    if (i % j == 0) continue numb;
//  }
//  numb1.push(i);
//}
//console.log(numb1);

//?2-3)
//let basket = [
//  {
//    id: "1",
//    name: "bicycle1",
//    price: 1000,
//  },
//  {
//    id: "2",
//    name: "bicycle2",
//    price: 2000,
//  },
//  {
//    id: "3",
//    name: "bicycle3",
//    price: 3000,
//  },
//];

////let countBasketPrice = 0;
////for (let i = 0; i < basket.length; i++) {
////  countBasketPrice += basket[i].price;
////}
////console.log(countBasketPrice);

//const countBasketPrice = basket.reduce((sum, cost) => {
//  return sum + cost.price;
//}, 0);
//console.log(countBasketPrice);

//?4)
//for (i = 0; i < 10; i++, console.log(i)) {}

//?5)

//let j = " ";
//for (let i = 0; i <= 20; i++) {
//  j += "*";
//  console.log(j);
//}
