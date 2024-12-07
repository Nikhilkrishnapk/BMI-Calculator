function calculate() {
    const h=parseInt(enteredHeight.value)
    const w=parseInt(enteredWeight.value)
    let isValid = true;

    heightError.innerHTML = '';
    weightError.innerHTML = '';

    if (h==='' || isNaN(h) || h<=0) {
        heightError.innerHTML='Enter a valid height'
        heightError.style.color="red";
        isValid = false;
    }
    if (w==='' || isNaN(w) || w<=0) {
        weightError.innerHTML='Enter a valid weight'
        weightError.style.color="red";
        isValid = false;
    }

    if (!isValid) {
        bmiOutput.innerHTML = ""; 
        bmiStatus.innerHTML = "";
        return;
    }




    const result =(w/((h**2)/10000)).toFixed(2);
    bmiOutput.innerHTML=`Your BMI is : ${result}`

  
        if (result<18.5) {
            bmiStatus.innerHTML='Underweight';
            bmiStatus.style.color='yellow';
        }else if(result>=18.5 && result<=24.9){
            bmiStatus.innerHTML='Healthy'
            bmiStatus.style.color='green';
        }else if (result>=25 && result<=29.9) {
            bmiStatus.innerHTML='Overweight'
            bmiStatus.style.color='orange';
        } else if (result>29.9) {
            bmiStatus.innerHTML='Obese'
            bmiStatus.style.color='red';
        }
  


     
}