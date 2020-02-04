let article=document.querySelectorAll('.hide-article');
let punkts=document.querySelectorAll('.punkts');

let arrows=document.querySelectorAll('.arrows');
for(let i =0; i<punkts.length; i++){
    punkts[i].addEventListener('mouseenter',function(){
        article[i].className='show-article'
        arrows[i].className='d6'
        this.classList.add('punks-hover')
    })
    punkts[i].addEventListener('mouseleave',function(){
        article[i].className='hide-article'
        arrows[i].className='arrows'
        this.classList.remove('punks-hover')
    })
}