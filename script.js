let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");
let result = document.getElementById("result");
function meat(duration){
    if(duration >= 6){
        return 650;
    }else{
        return 400;
    }
}
function beer(duration){
    if(duration >= 6){
        return 2000;
    }else{
        return 1200;
    }
}
function soda(duration){
    if(duration >= 6){
        return 1500;
    }else{
        return 1000;
    }
}
function calc(){
    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;
    if (adults =='' || kids =='' || duration ==''){
        alert("Você deve preencher todos os campos");
    }else {
        let meatAmount = (meat(duration) * adults) + ((meat(duration)/2) * kids);
        let beerAmount = (beer(duration) * adults);
        let sodaAmount = (soda(duration) * adults) + ((soda(duration)/2) * kids);
        result.style.display = 'flex';
        document.getElementById("meat").innerHTML = `<p>${Math.ceil(meatAmount/1000)} Kg de carne</p>`;
        document.getElementById("beer").innerHTML = `<p>${Math.ceil(beerAmount/1000)} L de cerveja</p>`;
        document.getElementById("coke").innerHTML = `<p>${Math.ceil(sodaAmount/1000)} L de refrigerante</p>`;
    }
}
function reset(){
   inputAdults.value = '';
   inputKids.value = '';
   inputDuration.value = '';
}
function back(){
    result.style.display = 'none';
}