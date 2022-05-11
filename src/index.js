import './less/index.less'
(()=>{
    const html = document.querySelector('html');
    const footer = document.querySelector('.footer');
    const imagesArr = document.querySelectorAll('img');
    const logo = document.querySelector('.logo-heading');
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
    window.addEventListener('load', e =>{
        logo.textContent = 'This was edited with an event';
    })
    window.addEventListener('resize', e =>{
        alert('YOU CHANGED THE SIZE!?!?!');
    });
    footer.addEventListener('wheel', e =>{
        alert("YOU CANNOT SCROLL FURTHER");
    });
    document.querySelector('div > header > h2').addEventListener('dblclick', e =>{
        logo.textContent = 'WOW';
    });
    let needyNum = 0;
    window.addEventListener('blur', e =>{
        if(needyNum === 0){
            needyNum++;
            alert('Why would you leave me...');
        }
    });
    window.addEventListener('focus', e =>{
        if(needyNum < 2){
            needyNum++;
            alert('Youre back!');
        }
    });
})()
// Your code goes here!
