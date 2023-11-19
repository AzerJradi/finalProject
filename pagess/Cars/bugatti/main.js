let data = [
    { id: 1, img: "./bugati/Bugatti_chiron.jpg", name: "Chiron", prix: "$3,000,000" },
    { id: 2, img: "./bugati/Bugatti_Centodieci.jpg", name: "Centodieci", prix: "$9,000,000" },
    { id: 3, img: "./bugati/Bugatti_Divo.jpg", name: "Divo", prix: "$5,800,000" },
    { id: 4, img: "./bugati/Bugatti_Vyron.jpg", name: "Veyron", prix: "$1,900,000" },
    { id: 5, img: "./bugati/Bugatti_W16_Mistral.jfif", name: "W16 Mistral", prix: "$5,000,000" }
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
