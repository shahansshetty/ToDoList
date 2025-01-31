let addbutton = document.getElementById('add');
let inputfeild = document.getElementById('tobox')    
let outfield = document.getElementById('list-id')    

addbutton.addEventListener('click',function(){
   var para = document.createElement('li');
    para.innerText=inputfeild.value;
    
       outfield.appendChild(para);
       inputfeild.value='';
       para.addEventListener('click',function(){
        para.style.textDecoration="line-through";
       })
       para.addEventListener('dblclick',function(){
        outfield.removeChild(para);
       })
       
})