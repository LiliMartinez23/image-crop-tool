const image = document.getElementById( 'image' );
const cropper = new Cropper( image, {
   aspectRatio: 1,
   viewMode: 2,
   minCropBoxWidth: 200,
   minCropBoxHeight: 200,
});

document.getElementById( 'cropImageButton' ).addEventListener( 'click', function() {
   let croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");

   document.getElementById( 'output' ).src = croppedImage;
});

document.getElementById( 'txtProfilePicUpload' ).addEventListener( 'change', function( event ) {
   const file = event.target.files[0];
   if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
         image.src = e,target.result;

         cropper.destroy();
         cropper.replace(e.target.result);
      };
      reader.readAsDataURL(file);
   }
});