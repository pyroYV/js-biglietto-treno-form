
/* 
const userKm = parseInt(prompt('Enter how long is your trip in Km'));
const userAge = parseInt(prompt ('How old are you?')); */
const priceKm = 0.26;
let submit = document.getElementById('submit-btn');
let reset = document.getElementById('reset-btn');

submit.addEventListener('click',function() {
    const userKm = (document.getElementById('input-km').value);
    const userAge = (document.getElementById('input-age').value);
    const userName = (document.getElementById('input-name').value);
    const standardPrice = userKm * priceKm;

    if ((userKm < 0) || (userAge <= 0)){
        document.getElementById('error').classList.remove('d-none');
    } else {
        document.getElementById('result').classList.remove('d-none');
        document.getElementById('user-name').innerHTML = userName;
        document.getElementById('wagon').innerHTML = (Math.floor(Math.random()*10000)+1);
        document.getElementById('cp-code').innerHTML = (Math.floor(Math.random()*100)+1);
        document.getElementById('error').classList.add('d-none');

        if (userAge < 18){
            const discounted = (standardPrice * 85 / 100)
            document.getElementById('sale-type').innerHTML = "troppo giovane per pagare prezzo intero";
            document.getElementById('sale-price').innerHTML = discounted + "€";
        } else if(userAge >= 65){
            const discounted = standardPrice * 65 / 100
            document.getElementById('sale-type').innerHTML = "troppo veccho per pagare prezzo intero";
            document.getElementById('sale-price').innerHTML = discounted + "€";
        } else {
            document.getElementById('sale-type').innerHTML = "Biglietto standard";
            document.getElementById('sale-price').innerHTML = standardPrice + "€";
        }
    }  
})

reset.addEventListener('click',function(){
    document.getElementById('result').classList.add('d-none');
    document.getElementById('error').classList.add('d-none');
})



