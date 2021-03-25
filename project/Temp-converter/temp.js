 const cel = document.querySelector('#celsius > input');
 const far = document.querySelector('#farhan > input');
 const kel = document.querySelector('#kelvin > input');


 function celsiusTo(){
    const cTemp = cel.value;
    const fTemp = (cTemp*(9/5))+32;
    const kTemp = fTemp+273.15;
    far.value = fTemp.toFixed(2);
    kel.value = kTemp.toFixed(2);
}
function farhanTo(){
    const fTemp = far.value;
    const cTemp = (fTemp-32)*5/9;
    const kTemp = cTemp+273;
    cel.value = Math.round(cTemp).toFixed(2);
    kel.value = Math.round(kTemp).toFixed(2);
}

 cel.addEventListener('input',celsiusTo)
 far.addEventListener('input',farhanTo)