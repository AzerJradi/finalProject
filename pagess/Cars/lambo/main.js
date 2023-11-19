let data = [
    { id: 1, img: "./lambo/Lamborghini_Aventador.jfif", name: "Aventador", prix: "$499,000" },
    { id: 2, img: "./lambo/Lamborghini_Tormenta.jfif", name: "Tormenta", prix: "$240,000" },
    { id: 3, img: "./lambo/Lamborghini_Sián.jpg", name: "Sian", prix: "$3,500,000" },
    { id: 4, img: "./lambo/Lamborghini_Urus.jpg", name: "Urus", prix: "$270,000" },
    { id: 5, img: "./lambo/Lamborghini_Gallardo.jfif", name: "Gallardo", prix: "$199,000" }
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