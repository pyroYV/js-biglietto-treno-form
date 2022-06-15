
/* 
const userKm = parseInt(prompt('Enter how long is your trip in Km'));
const userAge = parseInt(prompt ('How old are you?')); */
const priceKm = 0.26;

let submit = document.getElementById('submit-btn');
submit.addEventListener('click',function() {
    const userKm = (document.getElementById('input-km').value);
    const userAge = (document.getElementById('input-age').value);
    /* console.log(userKm,userAge); */

    const standardPrice = userKm * priceKm;

    if ((userKm < 0) || (userAge < 0)){
        console.log("error, only positive numbers")
    } else {
        if (userAge < 18){
            const discounted = (standardPrice * 85 / 100)
            console.log("Your ticket's price was " + standardPrice.toFixed(2), "but since you're really young you'll pay " + discounted.toFixed(2));
        } else if(userAge >= 65){
            const discounted = standardPrice * 65 / 100
            console.log("Your price was " + standardPrice.toFixed(2), "but since you're really old you'll pay " + discounted.toFixed(2))
        } else {
            console.log("Your ticket's price is" + standardPrice.toFixed(2))
        }
    }  
})





