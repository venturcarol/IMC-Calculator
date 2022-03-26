function calc(){
let name = document.querySelector("input[name = 'name']").value;
let height = parseFloat(document.querySelector("input[name = 'height']").value);
let weight = parseFloat(document.querySelector("input[name = 'weight']").value);
let result = document.querySelector('#result');

let imc = weight/(height * height);
imc = imc.toFixed(2);

  if(imc < 16){
    result.innerHTML = `Olá ${name}! O seu IMC é de ${imc}, considerado Magreza Grau III` 
  } else if(imc > 16 && imc < 16.9){
    result.innerHTML = `Olá ${name}! O seu IMC é de ${imc}, considerado Magreza Grau II`
  } else if(imc > 17 && imc < 18.4){
    result.innerHTML = `Olá ${name}! O seu IMC é de ${imc}, considerado Magreza Grau I`
  } else if(imc > 18.5 && imc < 24.9){
    result.innerHTML = `Olá ${name}! O seu IMC é de ${imc}, considerado Normal`
  } else if(imc > 25 && imc < 29.9){
    result.innerHTML = `Olá ${name}! O seu IMC é de ${imc}, considerado Pré-obeso`
  } else if(imc > 30 && imc < 34.9){
    result.innerHTML = `Olá ${name}! O seu IMC é de ${imc}, considerado Obesidade Grau I`
  } else if(imc > 35 && imc < 39.9){
    result.innerHTML = `Olá ${name}! O seu IMC é de ${imc}, considerado Obesidade Grau II`
  } else {
    result.innerHTML = `Olá ${name}! O seu IMC é de ${imc}, considerado Obesidade Grau III`
  }

}

