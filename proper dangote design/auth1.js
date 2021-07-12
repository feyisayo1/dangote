const auth = document.querySelector('.valid');
const popUp = document.getElementById('pop_up')
const doNotExist = document.getElementById('doNotExist');

// const user_input = document.getElementById('#user_input');

auth.addEventListener('submit', e => {
    e.preventDefault();

    const username = 7;
    var arr=[]
    if(user_input.value.match(/^[\w-_.]{0,5}$/)){
        console.log('correct')
        if  (username.value !=0){
            console.log('popopp',popUp);
            doNotExist.querySelector('.pop_up').classList.remove('show');
            doNotExist.querySelector('.pop_up').classList.add('hide');
            
            popUp.classList.remove('hide')
            popUp.classList.add('show')
            
        }
    }else if(arr.length < 1 ){
       
        popUp.classList.remove('show')
        popUp.classList.add('hide')
        doNotExist.querySelector('.pop_up').classList.remove('hide');
        doNotExist.querySelector('.pop_up').classList.add('show');
        
    }
    
  
})


