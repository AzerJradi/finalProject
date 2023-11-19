let data = [
    { id: 1, img: "./special/Skyline GT-R.jpg", name: "Skyline GT-R", prix: "$140,000" },
    { id: 2, img: "./special/Supra mk4.jpg", name: "Supra mk4", prix: "$100,000" },
    { id: 3, img: "./special/Supra mk5.jpg", name: "Supra mk5", prix: "$118,000" },
    { id: 4, img: "./special/Bentley Mulliner Batur($2,800,000).jpg", name: "Bentley Mulliner", prix: "$2,800,000" },
    { id: 5, img: "./special", name: "", prix: "$" }
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