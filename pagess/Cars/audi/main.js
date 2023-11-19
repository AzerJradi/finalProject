let data = [
    { id: 1, img: "./audi/Audi_R8_GT.jpg", name: "Audi R8 GT", prix: "$220,000" },
    { id: 2, img: "./audi/audi_RS7.jpg", name: "Audi RS7", prix: "$125,000" },
    { id: 3, img: "./audi/Audi_R8.jpg", name: "Audi R8", prix: "$152,000" },
    { id: 4, img: "./audi/Audi_RS5.jpg", name: "Audi RS5", prix: "$85,000" },
    { id: 5, img: "./audi/AUDI_RSQ8.jfif", name: "AUDI RSQ8", prix: "$114,500" }
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