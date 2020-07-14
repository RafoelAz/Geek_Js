document.querySelector(".button").onclick = function () {
  let tc = document.querySelector(".input").value;
  let tf = (9 / 5) * tc + 32;
  let out = tf + "&#8457;	";
  document.querySelector(".output").innerHTML = out;
  alert(tf);
};

//let name = "Василий";
//let admin = name;
//alert(admin);

//let sum = 1000 + "108";
//console.log(`${sum} - конкатенация`);
