const data = [
    {
        id: 1,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYHFkn3eVmI7z5OsmY54G0cTDKXS0hJhYMgA&s"
    }, {
        id: 2,
        imageUrl: "https://freefrontend.com/assets/img/css-logos/pure-css-twitch-logo.png"
    }, {
        id: 3,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvgG3RHI6WwSIMuesFSj_QdWi714XTiMHTYA&s"
    }, {
        id: 4,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6cGqsyq_UscLfbvKG3hDJgZzBYp9NoPkPCg&s"
    }, {
        id: 5,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuysCVANB23xetA8P-oa2AK1Uo6yMEpcNGQ&s"
    }
]


// let  carouselC=document.querySelector('.content');
// console.log(carouselC)


let currentIndex=0;
let dataLength=data.length;

let appendImg=document.querySelector('img');

// const addImage=()=>{
//     appendImg.setAttribute('src',data[0].imageUrl);
//     carouselC.appendChild(appendImg)  
// }

const updateImageOnEveryTimeFrame=()=>{
    //current index
    appendImg.setAttribute('src',data[(currentIndex)%data.length].imageUrl);
    currentIndex++;
}

// setTimeout(()=>{
//     addImage()
// },7000)


setInterval(()=>{
    updateImageOnEveryTimeFrame();
},3000)

