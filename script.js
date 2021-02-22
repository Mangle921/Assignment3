function calculate() {
  var amount = 500;
  if (check_errors()){
    amount = calculate_education(amount);
    amount = calculate_networth(amount);
    amount = calculate_skills(amount);
    amount = calculate_age(amount);
    amount = calculate_reputation(amount);
    amount = Math.round(amount);
    alert('$' + amount);
  }
}

function check_errors(){
  var errors = []
  var education = document.getElementById("education").value;
  var networth = document.getElementById("networth").value;
  var age1 = document.getElementById("age1").checked;
  var age2 = document.getElementById("age2").checked;
  var age3 = document.getElementById("age3").checked;
  if(education == 0){
    errors.push('Education level')
  }
  if(networth == 0){
    errors.push('Family networth')
  }
  if(!(age1 || age2 || age3)){
    errors.push('Age range')
  }
  if(errors.length > 0){
    alert('Please select: ' + errors.join(', ') + '.')
    return false;
  }
  else {
    return true;
  }
}

function calculate_education(amount) {
  var education = [1.5, 1.2, 1.05, 0.9]
  var education_index = parseInt(document.getElementById("education").value) - 1
  if(education_index > -1){
    amount *= education[education_index]
  }
  return amount;
}

function calculate_networth(amount) {
  var networth = [2.0, 1.5, 1.2]
  var networth_index = parseInt(document.getElementById("networth").value) - 1
  if(networth_index > -1){
    amount *= networth[networth_index]
  }
  return amount;
}

function calculate_skills(amount) {
  if(document.getElementById("dombra").checked){
    amount += 100
  }
  if(document.getElementById("cook").checked){
    amount += 200
  }
  if(document.getElementById("easygoing").checked){
    amount += 150
  }
  if(document.getElementById("sing").checked){
    amount += 100
  }
  return amount;
}

function calculate_age(amount) {
  var coefficient = 1;
  if(document.getElementById("age1").checked){
    coefficient = 1.5;
  }
  else if(document.getElementById("age2").checked){
    coefficient = 1.2;
  }
  else if(document.getElementById("age3").checked){
    coefficient = 0.95;
  }
  return amount * coefficient;
}

function calculate_reputation(amount) {
  if(document.getElementById("rep1").checked){
    amount *= 0.85;
  }
  if(document.getElementById("rep1").checked){
    amount *= 0.9;
  }
  if(document.getElementById("rep1").checked){
    amount -= 200;
  }
  return amount;
}
