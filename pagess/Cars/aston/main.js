let data = [
    { id: 1, img: "./aston martin/Aston_Martin_Valhalla($800,000).jpg", name: "Valhalla", prix: "$800,900" },
    { id: 2, img: "./aston martin/V8_Vantage.jpg", name: "V8 Vantage", prix: "$150,000" },
    { id: 3, img: "./aston martin/DBS_Superleggera.jpg", name: "DBS", prix: "$314,000" },
    { id: 4, img: "./aston martin/Vanquish_S.jpg", name: "Vanquish S", prix: "$300,000" },
    { id: 5, img: "./aston martin/d11.jpg", name: "DB11", prix: "$217,000" }
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