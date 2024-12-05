document.getElementById("bmiForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
  
    if (!height || !weight) {
      alert("Please enter valid values for height and weight.");
      return;
    }
  
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    const resultDiv = document.getElementById("result");
    const bmiValueSpan = document.getElementById("bmiValue");
    const bmiCategoryParagraph = document.getElementById("bmiCategory");
  
    let category = "";
    if (bmi < 18.5) {
      category = "Underweight - You must eat your pap! This is why you are skinny mxm";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight - You are AVERAGE, just like every other aspect of your life HAHA";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight - You are a little porky! oink oink";
    } else {
      category = "Obese - You are DANGEROUSLY porky!  ";
    }
  
    bmiValueSpan.textContent = bmi;
    bmiCategoryParagraph.textContent = `Category: ${category}`;
    resultDiv.classList.remove("hidden");
  });
  