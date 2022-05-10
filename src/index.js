import './less/index.less'
(()=>{
    const html = document.querySelector('html');
    const footer = document.querySelector('.footer');
    const imagesArr = document.querySelectorAll('img');
    html.addEventListener('keydown', e =>{
        if(e.key === 'r'){
            html.style.backgroundColor = 'red';
        }else if(e.key === 'w'){
            html.style.backgroundColor = 'white';
        }
    });
    footer.addEventListener('mouseenter', e =>{
        footer.style.backgroundColor = '#000000';
    });
    footer.addEventListener('mouseleave', e =>{
        footer.style.backgroundColor = '#FFEBCD';
    });
    imagesArr.forEach(image => {
        image.addEventListener('click', e =>{
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');
        });
    });
    
})()
// Your code goes here!
