const nxtbtn = document.querySelector('.next-btn');
const prevbtn = document.querySelector('.prev-btn');
const Slide = document.querySelectorAll('.slides');
const numberOfSlides = Slide.length;
let slideNumber =0;


//for next button
nxtbtn.onclick = () =>{
    Slide.forEach((slides) =>{
        slides.classList.remove('active');
    });
    slideNumber++;

    if (slideNumber>(numberOfSlides - 1)){
        slideNumber = 0;
    }
    Slide[slideNumber].classList.add('active');
}

// for prev btn
prevbtn.onclick = () =>{
    Slide.forEach((slides) =>{
        slides.classList.remove('active');
    });
    slideNumber--;

    if (slideNumber<0){
        slideNumber = numberOfSlides -1 ;
    }
    Slide[slideNumber].classList.add('active');
}