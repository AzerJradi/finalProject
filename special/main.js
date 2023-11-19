let data = [
    { id: Math.random(), img: "../imagess/Skyline_GT-R.jpg", name: "Skyline GT-R", prix: "$140,000" },
    { id: Math.random(), img: "../imagess/Supra_mk4.jpg", name: "Supra mk4", prix: "$100,000" },
    { id: Math.random(), img: "../imagess/Supra_mk5.jpg", name: "Supra mk5", prix: "$118,000" },
    { id: Math.random(), img: "../imagess/Bentley_Mulliner_Batur($2,800,000).jpg", name: "Bentley Mulliner", prix: "$2,800,000" },
    { id: Math.random(), img: "../imagess/Lexus_LFA.jfif", name: "Lexus LFA", prix: "$731,000" },
    // {id:6 , img: "./special/Subaru_STI.jpg", name:"Subaru STI", prix:"$40,000"}
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