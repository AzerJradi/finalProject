let data = [
    { id: 1, img: "./pagani/Pagani_Utopia.jpg", name: "Utopia", prix: "$2,200,000" },
    { id: 2, img: "./pagani/Pagani_Huayra.jpg", name: "Huayra", prix: "$4,000,000" },
    { id: 3, img: "./pagani/Pagani_Zonda.jpg", name: "Zonda", prix: "$7,500,000" },
    { id: 4, img: "./pagani/Pagani_HP_Barchetta.jpg", name: "HP Barchetta", prix: "$17,000,000" },
    { id: 5, img: "./pagani/pagani_imola.jpg", name: "Imola", prix: "$5,400,000" }
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