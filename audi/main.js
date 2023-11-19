let data = [
    { id: Math.random(), img: "../imagess/Audi_R8_GT.jpg", name: "Audi R8 GT", prix: "$220,000" },
    { id: Math.random(), img: "../imagess/audi_RS7.jpg", name: "Audi RS7", prix: "$125,000" },
    { id: Math.random(), img: "../imagess/Audi_R8.jpg", name: "Audi R8", prix: "$152,000" },
    { id: Math.random(), img: "../imagess/Audi_RS5.jpg", name: "Audi RS5", prix: "$85,000" },
    { id: Math.random(), img: "../imagess/AUDI_RSQ8.jfif", name: "AUDI RSQ8", prix: "$114,500" }
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