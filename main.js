// Define canvas 
const canvas = document.getElementById('canvas');
// Get context
const ctx = canvas.getContext('2d');
// Init image variable 
let img = new Image();
// Init filename variable
let fileName = '';
// Get button elements 
const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');
// Filters 

// Upload file 
uploadFile.addEventListener('change', () => {
  // Get file (first item in array) 
  const file = document.getElementById('upload-file').files[0];
  // Init file reader 
  const reader = new FileReader();
  // Check for file 
  if (file) {
    // Set filename 
    fileName = file.name;
    // Read data as Url 
    reader.readAsDataURL(file);
  }
  // Add image to canvas 
  reader.addEventListener('load', () => {
    // Create image 
    img = new Image();
    // Set src to result 
    img.src = reader.result;
    // On image load, add to canvas 
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      canvas.removeAttribute('data-caman-id');
    }
  }, false);
});

