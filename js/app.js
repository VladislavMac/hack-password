const password   = document.querySelector('.wrapper-password_input'),
      out        = document.querySelector('.wrapper-out_password'),
      buttonHack = document.querySelector('.wrapper-button_done'),
      errorOut   = document.querySelector('.wrapper-error_out');

const numbers           = [1,2,3,4,5,6,7,8,9,0],
      maxLengthPassword = 6;

buttonHack.addEventListener('click', hackPassword)

function checkingPossiblyPassword(password){
    const lengthPassword = password.value.length;

    if( (password.value).match(/[0-9]/) ){
        errorOut.innerHTML = '';
        if( lengthPassword > 0 ){
            errorOut.innerHTML = '';
            return true
        }else{
            errorOut.innerHTML = `Enter the ${maxLengthPassword} numbers or less!`
        }
    }else{
        errorOut.innerHTML = 'Enter numbers!'
    }
}

function hackPassword(){
    const lengthPassword = password.value.length;
    let forNum = 1;
    if( checkingPossiblyPassword(password) ){
        let i = 0;
        out.innerHTML = 'Program is working <br> Please just wait :)'
        const search = setInterval(() =>{
            if(i < forNum){
                i++;

                let generatePassword = '';
    
                for( let i = 0; i < lengthPassword; i++ ){
                    generatePassword += numbers[Math.floor(Math.random() * numbers.length)];
                }
    
                if( password.value == generatePassword ){
                    out.innerHTML = `Attempts made: ${i} <br> Final password: ${generatePassword}`;
                    clearInterval(search)
                }else{
                    forNum++;
                }
            }else{
                clearInterval(search)
            }
        }, 1)
    }
}