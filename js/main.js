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


const slide1 = $(".slide-wrap");
const btn_prev = $(".prev");
const btn_next = $(".next");
let speed = 1000;
let enableClick = true;

// $(".sldie1 li").last().prependTo(".slide1");

btn_prev.on("click", function(e){
    e.preventDefault();

    if(enableClick){
        enableClick = false;

        act_prev(slide1);
    }
    
})

btn_next.on("click", function(e){
    e.preventDefault();

    if(enableClick){
        enableClick = false;

        act_next(slide1);
    }   
})

function act_prev(el){
    el.children("ul").animate({ left : "0%"}, speed, function(){
        $(this).css({ left: "-100%"});
        $(this).children("li").last().prependTo(this);
        enableClick = true;
    });
}

function act_next(el){
    el.children("ul").animate({ left : "-200%"}, speed, function(){
        $(this).css({ left: "-100%"});
        $(this).children("li").first().appendTo(this);
        enableClick = true;
    });
}