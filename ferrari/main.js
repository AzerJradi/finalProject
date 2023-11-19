let data = [
    { id: Math.random(), img: "../imagess/Ferrari_F8_Tributo.jpg", name: "F8 Tributo", prix: "$497,000" },
    { id: Math.random(), img: "../imagess/Ferrari LaFerrari FXX-K Evo($2,700,000).jfif", name: "LaFerrari", prix: "$2,700,000" },
    { id: Math.random(), img: "../imagess/Ferrari_458_Speciale.jfif", name: "Ferrari 458", prix: "$365,000" },
    { id: Math.random(), img: "../imagess/ferrari_488_GTB.jpg", name: "ferrari 488", prix: "$250,629" },
    { id: Math.random(), img: "../imagess/Ferrari_458_Italia.jpg", name: "458 italia", prix: "$300,000" }
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