function convertTemperature() {
    // Get input values
    var inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    var unitFrom = document.getElementById("unitFrom").value;
    var unitTo = document.getElementById("unitTo").value;
  
    // Perform conversion
    var result;
    if (unitFrom === "celsius") {
      if (unitTo === "fahrenheit") {
        result = (inputTemperature * 9/5) + 32;
      } else if (unitTo === "kelvin") {
        result = inputTemperature + 273.15;
      } else {
        result = inputTemperature;
      }
    } else if (unitFrom === "fahrenheit") {
      if (unitTo === "celsius") {
        result = (inputTemperature - 32) * 5/9;
      } else if (unitTo === "kelvin") {
        result = (inputTemperature - 32) * 5/9 + 273.15;
      } else {
        result = inputTemperature;
      }
    } else if (unitFrom === "kelvin") {
      if (unitTo === "celsius") {
        result = inputTemperature - 273.15;
      } else if (unitTo === "fahrenheit") {
        result = (inputTemperature - 273.15) * 9/5 + 32;
      } else {
        result = inputTemperature;
      }
    }
  
    // Display result
    document.getElementById("result").textContent = result.toFixed(2);
  }  