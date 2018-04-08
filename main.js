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

// Add filters & effects 
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    const filter = e.target.classList[1];
    
    switch (filter) {
      case 'brightness-add':
        Caman('#canvas', img, function () {
          this.brightness(5).render();
        });
        break;
      case 'brightness-remove':
        Caman('#canvas', img, function () {
          this.brightness(-5).render();
        });
        break;
      case 'contrast-add':
        Caman('#canvas', img, function () {
          this.contrast(5).render();
        });
        break;
      case 'contrast-remove':
        Caman('#canvas', img, function () {
          this.contrast(-5).render();
        });
        break;
      case 'saturation-add':
        Caman('#canvas', img, function () {
          this.saturation(15).render();
        });
        break;
      case 'saturation-remove':
        Caman('#canvas', img, function () {
          this.saturation(-15).render();
        });
        break;
      case 'vibrance-add':
        Caman('#canvas', img, function () {
          this.vibrance(15).render();
        });
        break;
      case 'vibrance-remove':
        Caman('#canvas', img, function () {
          this.vibrance(-15).render();
        });
        break;
      case 'vintage-add':
        Caman('#canvas', img, function () {
          this.vintage().render();
        });
        break;
      case 'lomo-add':
        Caman('#canvas', img, function () {
          this.lomo().render();
        });
        break;
      case 'clarity-add':
        Caman('#canvas', img, function () {
          this.clarity().render();
        });
        break;
      case 'sincity-add':
        Caman('#canvas', img, function () {
          this.sinCity().render();
        });
        break;
      case 'crossprocess-add':
        Caman('#canvas', img, function () {
          this.crossProcess().render();
        });
        break;
      case 'pinhole-add':
        Caman('#canvas', img, function () {
          this.pinhole().render();
        });
        break;
      case 'nostalgia-add':
        Caman('#canvas', img, function () {
          this.nostalgia().render();
        });
        break;
      case 'hermajesty-add':
        Caman('#canvas', img, function () {
          this.herMajesty().render();
        });
        break;
    }
  }
});

//  Revert image, remove filters and effects 
revertBtn.addEventListener('click', () => {
  Caman('#canvas', img, function () {
    this.revert();
  });
});

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
