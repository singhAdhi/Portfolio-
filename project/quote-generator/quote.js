const out=document.querySelector('#output');
const but=document.querySelector('#btn');

function fet(){
fetch('https://official-joke-api.appspot.com/random_ten')
.then(function(resp){
    return resp.json();
})
.then(function(data){
    out.innerHTML=data[1].setup;
})
}

but.addEventListener('click',fet)
