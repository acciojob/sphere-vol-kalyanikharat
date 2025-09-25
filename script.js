function volume_sphere() {
    //Write your code here
  event.preventDefault(); // Prevent form from submitting

  // Get radius input value
  const radiusInput = document.getElementById("radius").value;
  const radius = parseFloat(radiusInput);

  // Validate input: must be a non-negative number
  let volume;
  if (isNaN(radius) || radius < 0) {
    volume = NaN;
  } else {
    // Calculate volume: V = (4/3) * π * r³
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4); // Round to 4 decimal places
  }

  // Display result
  document.getElementById("volume").value = volume;

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
