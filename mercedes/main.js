let data = [
    { id: Math.random(), img: "../imagess/Gclass.jpg", name: "G class", prix: "$139,900" },
    { id: Math.random(), img: "../imagess/gt_black_series.jpg", name: "GT Black", prix: "$1,050,000" },
    { id: Math.random(), img: "../imagess/Mercedes-AMG_GT_S.jpg", name: "AMG GT S", prix: "$124,950" },
    { id: Math.random(), img: "../imagess/GLS_maybach.jpg", name: "GLS maybach", prix: "$1,900,000" },
    { id: Math.random(), img: "../imagess/gt_36_s_e_performance.jfif", name: "gt 36 s e", prix: "$5,000,000" }
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

