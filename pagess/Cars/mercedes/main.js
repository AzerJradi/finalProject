let data = [
    { id: 1, img: "./mercedes/Gclass.jpg", name: "G class", prix: "$139,900" },
    { id: 2, img: "./mercedes/gt_black_series.jpg", name: "GT Black", prix: "$1,050,000" },
    { id: 3, img: "./mercedes/Mercedes-AMG_GT_S.jpg", name: "AMG GT S", prix: "$124,950" },
    { id: 4, img: "./mercedes/GLS_maybach.jpg", name: "GLS maybach", prix: "$1,900,000" },
    { id: 5, img: "./mercedes/gt_36_s_e_performance.jfif", name: "gt 36 s e", prix: "$5,000,000" }
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