let data = [
    { id: Math.random(), img: "../imagess/Bugatti_chiron.jpg", name: "Chiron", prix: "$3,000,000" },
    { id: Math.random(), img: "../imagess/Bugatti_Centodieci.jpg", name: "Centodieci", prix: "$9,000,000" },
    { id: Math.random(), img: "../imagess/Bugatti_Divo.jpg", name: "Divo", prix: "$5,800,000" },
    { id: Math.random(), img: "../imagess/Bugatti_Vyron.jpg", name: "Veyron", prix: "$1,900,000" },
    { id: Math.random(), img: "../imagess/Bugatti_W16_Mistral.jfif", name: "W16 Mistral", prix: "$5,000,000" }
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