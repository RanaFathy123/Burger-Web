// get price and other
let price = document.querySelector(".price span"),
  Time = document.querySelector(".Time"),
  Quanitity = document.querySelector(".Quantity"),
  cal = document.querySelector(".cal");
// Cutlet
let plsCutlet = document.querySelector("#plsCutlet"),
  minCutlet = document.querySelector("#minCutlet"),
  Cutlet = document.querySelector("#Cutlet");
// Mayo------------------
let plsMayo = document.querySelector("#plsMayo"),
  minMayo = document.querySelector("#minMayo"),
  Mayo = document.querySelector("#Mayo");
// Onion------------------
let plsOnion = document.querySelector("#plsOnion"),
  minOnion = document.querySelector("#minOnion"),
  Onion = document.querySelector("#Onion");
// Tomato------------------
let plsTomato = document.querySelector("#plsTomato"),
  minTomato = document.querySelector("#minTomato"),
  Tomato = document.querySelector("#Tomato");

// Cucumber------------------
let plsCucumber = document.querySelector("#plsCucumber"),
  minCucumber = document.querySelector("#minCucumber"),
  Cucumber = document.querySelector("#Cucumber");
// Cheese------------------
let plsCheese = document.querySelector("#plsCheese"),
  minCheese = document.querySelector("#minCheese"),
  Cheese = document.querySelector("#Cheese");
// Salad------------------
let plsSalad = document.querySelector("#plsSalad"),
  minSalad = document.querySelector("#minSalad"),
  Salad = document.querySelector("#Salad");
// Bun------------------
let plsBun = document.querySelector("#plsBun"),
  minBun = document.querySelector("#minBun"),
  Bun = document.querySelector("#Bun");
let counter = 0;
// Cutlet
plsCutlet.addEventListener("click", function () {
  if (parseInt(Cutlet.innerHTML) < 2) {
    Cutlet.innerHTML = parseInt(Cutlet.innerHTML) + 1;
    price.innerHTML = parseFloat(price.innerHTML) + 10.5;
    Time.innerHTML = parseFloat(Time.innerHTML) + 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) + 1;
    cal.innerHTML = parseFloat(cal.innerHTML) + 46;
    checkprice();
    imgs("../imgs/1.png");
    counter++;
    console.log(counter);
    /*   fcounter() */
  } else {
    alert("The maximum cutoff is 2");
  }
});
minCutlet.addEventListener("click", function () {
  if (parseInt(Cutlet.innerHTML) > 0) {
    // removeimg('../imgs/1.png')
    Cutlet.innerHTML = parseInt(Cutlet.innerHTML) - 1;
    price.innerHTML = parseFloat(price.innerHTML) - 10.5;
    Time.innerHTML = parseFloat(Time.innerHTML) - 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) - 1;
    cal.innerHTML = parseFloat(cal.innerHTML) - 46;
    checkprice();
    let i = document.querySelectorAll('.main-img img[src="../imgs/1.png"]');
    let count = 0;
    if ((i.src = "../imgs/1.png")) {
      i[count].remove();
      count++;
    }
    counter--;
    fcounter();

    // removeImg('../imgs/1.png')
  } else {
    return 0;
  }
});
// Mayo
plsMayo.addEventListener("click", function () {
  if (parseInt(Mayo.innerHTML) < 2) {
    Mayo.innerHTML = parseInt(Mayo.innerHTML) + 1;
    price.innerHTML = parseFloat(price.innerHTML) + 2;
    Time.innerHTML = parseFloat(Time.innerHTML) + 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) + 1;
    cal.innerHTML = parseFloat(cal.innerHTML) + 46;
    checkprice();
    imgs("../imgs/2.png");
    counter++;
    console.log(counter);
    fcounter();
  } else {
    alert("The maximum cutoff is 2");
  }
});
minMayo.addEventListener("click", function () {
  if (parseInt(Mayo.innerHTML) > 0) {
    Mayo.innerHTML = parseInt(Mayo.innerHTML) - 1;
    price.innerHTML = parseFloat(price.innerHTML) - 2;
    Time.innerHTML = parseFloat(Time.innerHTML) - 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) - 1;
    cal.innerHTML = parseFloat(cal.innerHTML) - 46;
    checkprice();
    let i = document.querySelectorAll('.main-img img[src="../imgs/2.png"]');
    let count = 0;
    if ((i.src = "../imgs/2.png")) {
      i[count].remove();
      count++;
    }
    counter--;
    fcounter();

    // removeimg('../imgs/2.png')
  } else {
    return 0;
  }
});
// Tomato
plsTomato.addEventListener("click", function () {
  if (parseInt(Tomato.innerHTML) < 2) {
    Tomato.innerHTML = parseInt(Tomato.innerHTML) + 1;
    price.innerHTML = parseFloat(price.innerHTML) + 5;
    Time.innerHTML = parseFloat(Time.innerHTML) + 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) + 1;
    cal.innerHTML = parseFloat(cal.innerHTML) + 46;
    checkprice();
    imgs("../imgs/4.png");
    counter++;
    console.log(counter);
    fcounter();
  } else {
    alert("The maximum cutoff is 2");
  }
});
minTomato.addEventListener("click", function () {
  if (parseInt(Tomato.innerHTML) > 0) {
    Tomato.innerHTML = parseInt(Tomato.innerHTML) - 1;
    price.innerHTML = parseFloat(price.innerHTML) - 5;
    Time.innerHTML = parseFloat(Time.innerHTML) - 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) - 1;
    cal.innerHTML = parseFloat(cal.innerHTML) - 46;
    checkprice();
    let i = document.querySelectorAll('.main-img img[src="../imgs/4.png"]');
    let count = 0;
    if ((i.src = "../imgs/4.png")) {
      i[count].remove();
      count++;
    }
    counter--;
    fcounter();
  }
});
// Onion
plsOnion.addEventListener("click", function () {
  if (parseInt(Onion.innerHTML) < 2) {
    Onion.innerHTML = parseInt(Onion.innerHTML) + 1;
    price.innerHTML = parseFloat(price.innerHTML) + 5;
    Time.innerHTML = parseFloat(Time.innerHTML) + 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) + 1;
    cal.innerHTML = parseFloat(cal.innerHTML) + 46;
    checkprice();
    imgs("../imgs/3.png");
    counter++;
    console.log(counter);
    fcounter();
  } else {
    alert("The maximum cutoff is 2");
  }
});
minOnion.addEventListener("click", function () {
  if (parseInt(Onion.innerHTML) > 0) {
    Onion.innerHTML = parseInt(Onion.innerHTML) - 1;
    price.innerHTML = parseFloat(price.innerHTML) - 5;
    Time.innerHTML = parseFloat(Time.innerHTML) - 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) - 1;
    cal.innerHTML = parseFloat(cal.innerHTML) - 46;
    checkprice();
    let i = document.querySelectorAll('.main-img img[src="../imgs/3.png"]');
    let count = 0;
    if ((i.src = "../imgs/3.png")) {
      i[count].remove();
      count++;
    }
    counter--;
    fcounter();
  } else {
    return 0;
  }
});
// Cucumber
plsCucumber.addEventListener("click", function () {
  if (parseInt(Cucumber.innerHTML) < 2) {
    Cucumber.innerHTML = parseInt(Cucumber.innerHTML) + 1;
    price.innerHTML = parseFloat(price.innerHTML) + 2.5;
    Time.innerHTML = parseFloat(Time.innerHTML) + 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) + 1;
    cal.innerHTML = parseFloat(cal.innerHTML) + 46;
    checkprice();
    imgs("../imgs/5.png");
    counter++;
    console.log(counter);
    fcounter();
  } else {
    alert("The maximum cutoff is 2");
  }
});
minCucumber.addEventListener("click", function () {
  if (parseInt(Cucumber.innerHTML) > 0) {
    Cucumber.innerHTML = parseInt(Cucumber.innerHTML) - 1;
    price.innerHTML = parseFloat(price.innerHTML) - 2.5;
    Time.innerHTML = parseFloat(Time.innerHTML) - 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) - 1;
    cal.innerHTML = parseFloat(cal.innerHTML) - 46;
    checkprice();
    let i = document.querySelectorAll('.main-img img[src="../imgs/5.png"]');
    let count = 0;
    if ((i.src = "../imgs/5.png")) {
      i[count].remove();
      count++;
    }
    counter--;
    fcounter();
  } else {
    return 0;
  }
});
// Cheese
plsCheese.addEventListener("click", function () {
  if (parseInt(Cheese.innerHTML) < 2) {
    Cheese.innerHTML = parseInt(Cheese.innerHTML) + 1;
    price.innerHTML = parseFloat(price.innerHTML) + 10;
    Time.innerHTML = parseFloat(Time.innerHTML) + 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) + 1;
    cal.innerHTML = parseFloat(cal.innerHTML) + 46;
    checkprice();
    imgs("../imgs/6.png");
    counter++;
    console.log(counter);
    fcounter();
  } else {
    alert("The maximum cutoff is 2");
  }
});
minCheese.addEventListener("click", function () {
  if (parseInt(Cheese.innerHTML) > 0) {
    Cheese.innerHTML = parseInt(Cheese.innerHTML) - 1;
    price.innerHTML = parseFloat(price.innerHTML) - 10;
    Time.innerHTML = parseFloat(Time.innerHTML) - 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) - 1;
    cal.innerHTML = parseFloat(cal.innerHTML) - 46;
    checkprice();
    let i = document.querySelectorAll('.main-img img[src="../imgs/6.png"]');
    let count = 0;
    if ((i.src = "../imgs/6.png")) {
      i[count].remove();
      count++;
    }
    counter--;
    fcounter();
  } else {
    return 0;
  }
});
// Salad
plsSalad.addEventListener("click", function () {
  if (parseInt(Salad.innerHTML) < 2) {
    Salad.innerHTML = parseInt(Salad.innerHTML) + 1;
    price.innerHTML = parseFloat(price.innerHTML) + 2;
    Time.innerHTML = parseFloat(Time.innerHTML) + 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) + 1;
    cal.innerHTML = parseFloat(cal.innerHTML) + 46;
    checkprice();
    imgs("../imgs/7.png");
    counter++;
    console.log(counter);
    fcounter();
  } else {
    alert("The maximum cutoff is 2");
  }
});
minSalad.addEventListener("click", function () {
  if (parseInt(Salad.innerHTML) > 0) {
    Salad.innerHTML = parseInt(Salad.innerHTML) - 1;
    price.innerHTML = parseFloat(price.innerHTML) - 2;
    Time.innerHTML = parseFloat(Time.innerHTML) - 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) - 1;
    cal.innerHTML = parseFloat(cal.innerHTML) - 46;
    checkprice();
    let i = document.querySelectorAll('.main-img img[src="../imgs/7.png"]');
    let count = 0;
    if ((i.src = "../imgs/7.png")) {
      i[count].remove();
      count++;
    }
    counter--;
    fcounter();
  }
});
// Bun
plsBun.addEventListener("click", function () {
  if (parseInt(Bun.innerHTML) < 1) {
    Bun.innerHTML = parseInt(Bun.innerHTML) + 1;
    price.innerHTML = parseFloat(price.innerHTML) + 5;
    Time.innerHTML = parseFloat(Time.innerHTML) + 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) + 1;
    cal.innerHTML = parseFloat(cal.innerHTML) + 46;
    checkprice();
    imgs("../imgs/8.png");
    counter++;
    console.log(counter);
    fcounter();
  } else {
    alert("The maximum cutoff is 1");
  }
});
minBun.addEventListener("click", function () {
  if (parseInt(Bun.innerHTML) > 0) {
    Bun.innerHTML = parseInt(Bun.innerHTML) - 1;
    price.innerHTML = parseFloat(price.innerHTML) - 5;
    Time.innerHTML = parseFloat(Time.innerHTML) - 5;
    Quanitity.innerHTML = parseFloat(Quanitity.innerHTML) - 1;
    cal.innerHTML = parseFloat(cal.innerHTML) - 46;
    checkprice();
    let i = document.querySelectorAll('.main-img img[src="../imgs/8.png"]');
    let count = 0;
    if ((i.src = "../imgs/8.png")) {
      i[count].remove();
      count++;
    }
    counter--;
    fcounter();
  }
});
function checkprice() {
  if (parseFloat(price.innerHTML) > 21) {
    price.style.color = "red";
  } else {
    price.style.color = "#5243C2";
  }
}
// animation food burger
function imgs(src) {
  let img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("id", "img");
  document.getElementById("main-img").prepend(img);
}

// go to checkout
let checkout = document.getElementById("checkout");
checkout.onclick = function () {
  if (counter > 3 && parseInt(Cutlet.innerHTML) > 0) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.style.overflowY = "hidden";
    document.querySelector("main").style.cssText = `
            width:100%;
            height: 100vh;
        `;
    document.querySelector("main form").style.display = "block";
  } else {
    alert("You must enter 3 pieces of his piece and a piece of meat");
  }
};
let cls = document.getElementById("close");
cls.onclick = function () {
  document.querySelector("main").style.cssText = `
        width:0px;
        height: 0px;
    `;
  document.querySelector("main form").style.display = "none";
  document.querySelector("body").style.overflowY = "auto";
};

// counter
function fcounter() {
  if (counter > 10) {
    // console.log('true');
    document.getElementById("container").style.paddingTop = "270px";
  }
  if (counter <= 10) {
    // console.log('false');
    document.getElementById("container").style.paddingTop = "60px";
  }
}
