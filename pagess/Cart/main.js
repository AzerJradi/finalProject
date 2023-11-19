
let allCardsGettedHTML = document.querySelector(".cardShopCar");
let dataGettedFromLocalStorage = JSON.parse(localStorage.getItem("carSaved"));
let uniqueProductIds = new Set();

let uniqueCardsHTML = dataGettedFromLocalStorage
  .filter(item => {
    // Filter out duplicates based on product ID
    if (uniqueProductIds.has(item.id)) {
      return false; // Skip duplicates
    }
    uniqueProductIds.add(item.id); // Add the current product ID to the Set
    return true; // Include unique items
  })

let allCardGetted = uniqueCardsHTML.map((item) => `
  <div class="cardssShopCar2">
    <div class="card">
      <img src="../../${item.img}" alt="" class="imgg">
      <h2>${item.name}</h2>
      <span class="price">${item.prix}</span>
      <div class="quant">
        <button class="minus">-</button>
        <input type="number" value="1" class="numm">
        <button class="plus">+</button>
        <button class="del">X</button>
      </div>
    </div>
  </div>

`
);

allCardsGettedHTML.innerHTML = allCardGetted.join("");

// delete button
let delBtn = document.querySelectorAll(".del");
for (let i = 0; i < delBtn.length; i++) {
  delBtn[i].addEventListener("click", function () {
    uniqueCardsHTML.splice([i],1)
    let myobj = JSON.stringify(uniqueCardsHTML);
    localStorage.setItem("carSaved", myobj);
    location.reload()
    totalPrix()
  });
}

let plusBtn = document.querySelectorAll(".plus");
let minusBtn = document.querySelectorAll(".minus");

// plus button
for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function () {
    let inputField = this.parentNode.querySelector("input");
    let currentValue = parseInt(inputField.value);
    inputField.value = currentValue + 1;
    totalPrix()
  });

  // minus button
  minusBtn[i].addEventListener("click", function () {
    let inputField = this.parentNode.querySelector("input");
    let currentValue = parseInt(inputField.value);
    if (currentValue > 1) {
      inputField.value = currentValue - 1;
      totalPrix()
    }
  });
}

// TOtal price
// let price= document.querySelectorAll(".price")
// let quant= document.querySelectorAll(".numm")
function totalPrix (){
  var quantity = document.querySelectorAll(".numm")
  var prixed = document.querySelectorAll(".price")
  var tot = document.querySelector("#totalPriceInpValue")
  console.log(tot);

  let sum = 0
  for (let i=0 ; i<quantity.length; i++){
    var prixInter = prixed[i].innerHTML
    sum = sum + (parseInt(quantity[i].value) * parseFloat(prixInter.replace(/[$,]/g, '')))
  }
    tot.innerHTML= `$ ${sum}`
}

totalPrix()