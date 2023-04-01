let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.skip').addEventListener('click', function(){
    offset = offset + 2000;
    if(offset>2100){
        offset=0;
    }
    sliderLine.style.left = -offset + 'px';
})
document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open');
})