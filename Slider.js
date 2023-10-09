const slides = document.querySelectorAll('.slide')

let counter = 0;

slides.forEach((slide, index)=>{
  slide.style.left = `${index * 100}%`
})

const slideImage = () => {
    console.log('working')
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`
    })

}

const goNext = ()=> {
    
    console.log('running');
    counter++
    slideImage()
}
const goPrev = ()=> {
    console.log('running');
    counter--
    slideImage()
}