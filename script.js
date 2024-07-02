// document.addEventListener("DOMContentLoaded", function() {
//     const slides = document.querySelectorAll(".header");
//     let slideIndex = 0;
//     const interval = 3000; // Interval in milliseconds (3 seconds)

//     // Function to move to the next slide
//     function moveToNextSlide() {
//         // Move to the next slide index
//         slideIndex++;
//         if (slideIndex >= slides.length) {
//             slideIndex = 0; // Reset to the first slide if reached the end
//         }

//         // Calculate the translation value
//         const translateValue = `translateX(-${slideIndex * 100}%)`;

//         // Apply the transform to each slide
//         slides.forEach(slide => {
//             slide.style.transform = translateValue;
//         });
//     }

//     // Set initial position for each slide
//     slides.forEach((slide, index) => {
//         slide.style.transform = `translateX(${index === 0 ? 0 : 100}%)`; // Start position, first slide centered
//     });

//     // Automatically move to the next slide every interval
//     setInterval(moveToNextSlide, interval);
// });


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

