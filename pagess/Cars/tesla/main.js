// var AddToCart= document.querySelectorAll(".addBTN");
// for (let i=0; i<AddToCart.length ; i++){
//     AddToCart[i].addEventListener("click",function(){
//         var message = confirm("added to the cart");
//         console.log(message );
// })
// }
let data = [
    { id: Math.random(), img: "./tesla/Model_S.jpg", name: "Model S", prix: "$75,000" },
    { id: Math.random(), img: "./tesla/model_Y.jpg", name: "Model Y", prix: "$50,000" },
    { id: Math.random(), img: "./tesla/Model_X.jpg", name: "Model X", prix: "$80,000" },
    { id: Math.random(), img: "./tesla/model_3.jpg", name: "Model 3", prix: "$55,000" },
    { id: Math.random(), img: "./tesla/tesla_roadster.jpg", name: "Roadster", prix: "$200,000" }
];
let allCards = document.querySelector(".allCards");
let allCardMapped = data.map(el => {
    return `
       
            <div class="card">
                <div class="imgpro">
                    <img src="${el.img}" alt="" width="100%" height="200px">
                </div>
                <div class="title">
                    <h1>${el.name}</h1>
                    <span>${el.prix}</span>
                </div>
                <div class="addtocart">
                    <button class="addBTN" >Add to cart</button>
                    <img class="fvrt" src="./mercedes/favrt.png" alt="">
                </div>
            </div>
        
    `;
});
allCards.insertAdjacentHTML('afterbegin', allCardMapped.join(''));

let btnAdd = document.querySelectorAll(".addBTN")
let allData = []
for(let i=0; i<btnAdd.length;i++){
    btnAdd[i].addEventListener("click",function(){
      let dataConverted =   JSON.stringify(data[i])
      allData = [...allData, dataConverted]
      localStorage.setItem("carSaved", allData)
    })
}
console.log(allData);
let allDataGetedFromLocalStorage = localStorage.getItem("carSaved")
console.log(allDataGetedFromLocalStorage);