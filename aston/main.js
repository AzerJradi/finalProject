let data = [
    { id: Math.random(), img: "../imagess/Aston_Martin_Valhalla($800,000).jpg", name: "Valhalla", prix: "$800,900" },
    { id: Math.random(), img: "../imagess/V8_Vantage.jpg", name: "V8 Vantage", prix: "$150,000" },
    { id: Math.random(), img: "../imagess/DBS_Superleggera.jpg", name: "DBS", prix: "$314,000" },
    { id: Math.random(), img: "../imagess/Vanquish_S.jpg", name: "Vanquish S", prix: "$300,000" },
    { id: Math.random(), img: "../imagess/DB11.jfif", name: "DB11", prix: "$217,000" }
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