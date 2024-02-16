document.querySelector('.calculation-btn').addEventListener('click', function() {
    let age = parseFloat(document.getElementById('age').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let gender = document.getElementById('gender').value;
    let result = weight / Math.pow((height / 100), 2)  ;
  
    let resultDiv = document.getElementById('result');
    let formattedResult = result.toFixed(2);


    if (result < 16) {
        resultDiv.innerHTML = "<p>Severe Thinness: " + result.toFixed(2) + "</p>";
      } else if (result >= 16 && result <= 17) {
        resultDiv.innerHTML = "<p>Moderate Thinness: " + result.toFixed(2) + "</p>";
      } else if (result > 17 && result <= 18.5) {
        resultDiv.innerHTML = "<p>Mild Thinness: " + result.toFixed(2) + "</p>";
      } else if (result > 18.5 && result <= 25) {
        resultDiv.innerHTML = "<p>Normal: " + result.toFixed(2) + "</p>";
      } else if (result > 25 && result <= 30) {
        resultDiv.innerHTML = "<p>Overweight: " + result.toFixed(2) + "</p>";
      } else if (result > 30 && result <= 35) {
        resultDiv.innerHTML = "<p>Obese Class I: " + result.toFixed(2) + "</p>";
      } else if (result > 35 && result <= 40) {
        resultDiv.innerHTML = "<p>Obese Class II: " + result.toFixed(2) + "</p>";
      } else {
        resultDiv.innerHTML = "<p>Obese Class III: " + result.toFixed(2) + "</p>";
      }

    });


  document.querySelector('.clear-btn').addEventListener('click', function() {
    document.getElementById('age').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('gender').value = 'male';
    document.getElementById('result').innerHTML = '';
  });
