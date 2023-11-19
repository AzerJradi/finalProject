let data = [
    { id: 1, img: "./porshe/Porsche_911.jpg", name: "Porshe 911", prix: "$590,000" },
    { id: 2, img: "./porshe/Porsche_718.jpg", name: "Porsche 718", prix: "$63,000" },
    { id: 3, img: "./porshe/Porsche_Cayenne.jpg", name: "Cayenne", prix: "$80,000" },
    { id: 4, img: "./porshe/Porsche_Cayenne.jpg", name: "Panamera", prix: "$122,000" },
    { id: 5, img: "./porshe/Porsche_Taycan.jpg", name: "Taycan", prix: "$86,000" }
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