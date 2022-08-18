const password   = document.querySelector('.wrapper-password_input'),
      out        = document.querySelector('.wrapper-out_password'),
      buttonHack = document.querySelector('.wrapper-button_done'),
      errorOut   = document.querySelector('.wrapper-error_out');

const numbers           = [1,2,3,4,5,6,7,8,9,0],
      maxLengthPassword = 6;

buttonHack.addEventListener('click', hackPassword)
password.addEventListener('input', checkingNumberCharacters)

function checkingNumberCharacters(){
    if( password.value.length <= maxLengthPassword ){
        errorOut.innerHTML = ''
    }else{
        errorOut.innerHTML = 'You have exceeded the maximum numbers'
    }
}

function checkingPossiblyPassword(password){
    const lengthPassword = password.value.length;

    if( (password.value).match(/[0-9]/) ){
        errorOut.innerHTML = '';
        if( lengthPassword <= maxLengthPassword && lengthPassword > 0 ){
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
        for( let i = 0; i < forNum; i++ ){
            let generatePassword = '';

            for( let i = 0; i < lengthPassword; i++ ){
                generatePassword += numbers[Math.floor(Math.random() * numbers.length)];
            }

            if( password.value == generatePassword ){
                out.innerHTML = `Attempts made: ${i} <br> Final password: ${generatePassword}`;
            }else{
                forNum++;
            }
        }
    }
}