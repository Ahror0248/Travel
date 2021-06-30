let account = ''
let name =``
if(account.length >= 4 && account.length <= 12 && name.length>=1 && account.includes('@')) {
    console.log ('You got strong password');
}

    else if(account.length >= 4 && account.length <= 12 ){
        console.log('You have password');
    }
    else {
        console.log('input password')
    }

if( name.length>=1){
    console.log(`Name is done! But password is'nt correctly`)
}

else{
    console.log(`Input your name`)
}