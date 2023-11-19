let data = [
    { id: 1, img: "./BMW/BMW_Z4.jfif", name: "BMW Z4", prix: "$55,000" },
    { id: 2, img: "./BMW/BMW_M8.jpg", name: "BMW M8", prix: "$130,000" },
    { id: 3, img: "./BMW/BMW_M3.jpg", name: "BMW M3", prix: "$71,200" },
    { id: 4, img: "./BMW/BMW_2_Series.jpg", name: "BMW 2 Series", prix: "$47,200" },
    { id: 5, img: "./BMW/BMW_5_Series.jpg", name: "BMW 5 Series", prix: "$57,600" }
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