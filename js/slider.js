(function(){
    
    const sliders = [...document.querySelectorAll('.mivi_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentmivi = document.querySelector('.mivi_body--show').dataset.id;
        value = Number(currentmivi);
        value+= add;


        sliders[Number(currentmivi)-1].classList.remove('mivi_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('mivi_body--show');

    }

})();