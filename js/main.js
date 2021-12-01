const menu = ["About", "Portfolio", "Contact Me", "Video"];

const swiper = new Swiper("#swiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    mousewheel: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        renderBullet: function(index, className){
            return `<span class="${className}">${menu[index]}</span>`
        }
    }
});


const bgs = document.querySelectorAll(".bg li");
const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");
const navi = document.querySelectorAll(".swiper-pagination span");

next.addEventListener("click", activation);
prev.addEventListener("click", activation);
window.addEventListener("mousewheel", activation);
swiper.on("slideChangeTransitionEnd", activation);

for(let el of navi){
    el.addEventListener("click", e=>{
        const isOn = e.currentTarget.classList.contains("swiper-pagination-bullet-active");
        if(isOn) return;
        swiper.on("slideChangeTransitionEnd", activation);
    })
}

function activation(){
    let item = document.querySelector(".swiper-slide-active");
    let i = item.getAttribute("data-swiper-slide-index");

    for(let el of bgs){
        el.classList.remove("on");
    }
    bgs[i].classList.add("on");
}

const slide1 = $(".slide1");
const back = $(".slide1>li");
const btn_prev = $(".prev");
const btn_next = $(".next");

// btn_next.addEventListener("click", e=>{
//     e.preventDefault();
//     console.log("HELLO");

//     // new Anim(slide1, {
//     //     prop: "left",
//     //     value: "-200%",
//     //     duration: 500,
//     //     callback: ()=>{
//     //         slide1.style.left = "-100%";
//     //         slide1.append(slide1.firstElementChild);
//     //     }
//     // })
// })

btn_next.on("click", function(e){
    e.preventDefault();

    slide1.animate({ left : "-200%"}, 1000, function(){
        slide1.css({ left: "-100%"});
        back.first().appendTo(slide1);
    });
})