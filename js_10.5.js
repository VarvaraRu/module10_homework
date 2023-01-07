let btn = document.querySelector (".btn"); 

btn.addEventListener ("click", clicOnButton); 

function clicOnButton () {
  alert (`This is width: ${window.innerWidth} and this is height: ${window.innerHeight} (including scrollbar)`); 
}
