let data = [
    {id: Math.random(), img: "../imagess/BMW_Z4.jfif", name: "BMW Z4", prix: "$55,000" },
    {id: Math.random(), img: "../imagess/BMW_M8.jpg", name: "BMW M8", prix: "$130,000" },
    {id: Math.random(), img: "../imagess/BMW_M3.jpg", name: "BMW M3", prix: "$71,200" },
    {id: Math.random(), img: "../imagess/BMW_2_Series.jpg", name: "BMW 2 Series", prix: "$47,200" },
    {id: Math.random(), img: "../imagess/BMW_5_Series.jpg", name: "BMW 5 Series", prix: "$57,600" }
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