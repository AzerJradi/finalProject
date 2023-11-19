// var AddToCart= document.querySelectorAll(".addBTN");
// for (let i=0; i<AddToCart.length ; i++){
//     AddToCart[i].addEventListener("click",function(){
//         var message = confirm("added to the cart");
//         console.log(message );
// })
// }
let data = [
    { id: Math.random(), img: "../imagess/Model_S.jpg", name: "Model S", prix: "$75,000" },
    { id: Math.random(), img: "../imagess/model_Y.jpg", name: "Model Y", prix: "$50,000" },
    { id: Math.random(), img: "../imagess/Model_X.jpg", name: "Model X", prix: "$80,000" },
    { id: Math.random(), img: "../imagess/model_3.jpg", name: "Model 3", prix: "$55,000" },
    { id: Math.random(), img: "../imagess/tesla_roadster.jpg", name: "Roadster", prix: "$200,000" }
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
                    <button key=${el.id} class="addBTN" >Add to cart</button>
                    <img class="fvrt" src="./mercedes/favrt.png" alt="">
                </div>
            </div>
        
    `;
});
allCards.insertAdjacentHTML('afterbegin', allCardMapped.join(''));
let btnAdd = document.querySelectorAll(".addBTN")
console.log(btnAdd);
let allData =[]
if (JSON.parse(localStorage.getItem("carSaved")) ){
    allData = JSON.parse(localStorage.getItem("carSaved"))}
for(let i=0; i<btnAdd.length;i++){
    btnAdd[i].addEventListener("click",function(){
       
         let keyGetted = btnAdd[i].getAttribute("key")
        
        let dataSendedToLocal = data.filter(el=>el.id == keyGetted )[0]
        
      allData = [...allData, dataSendedToLocal]
     let myTable = JSON.stringify(allData)
      localStorage.setItem("carSaved", myTable)
     
    })
}