function Renderiza(event){
   var input = event.target;
   var rend = document.querySelector('.preview_Image');

   rend.innerHTML = '';
   for (let index = 0; index < input.files.length; index++) {
    var reader = new FileReader();   
    reader.onload = () =>{
      var img = document.createElement('img')
      img.src = reader.result;
    rend.appendChild(img);   
    };
    reader.readAsDataURL(input.files[index]);
   }
}