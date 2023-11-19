let data = [
    { id: Math.random(), img: "../imagess/Lamborghini_Aventador.jfif", name: "Aventador", prix: "$499,000" },
    { id: Math.random(), img: "../imagess/Lamborghini_Tormenta.jfif", name: "Tormenta", prix: "$240,000" },
    { id: Math.random(), img: "../imagess/Lamborghini_Sián.jpg", name: "Sian", prix: "$3,500,000" },
    { id: Math.random(), img: "../imagess/Lamborghini_Urus.jpg", name: "Urus", prix: "$270,000" },
    { id: Math.random(), img: "../imagess/Lamborghini_Gallardo.jfif", name: "Gallardo", prix: "$199,000" }
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