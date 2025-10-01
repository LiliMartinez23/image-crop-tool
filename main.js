const image = document.getElementById( 'image' );
const cropper = new Cropper( image, {
   aspectRatio: 1,
   viewMode: 0,
});

document.getElementById( 'cropImageButton' ).addEventListener( 'click', function() {
   let croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");

   document.getElementById( 'output' ).src = croppedImage;
});