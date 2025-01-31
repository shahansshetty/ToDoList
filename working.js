let addbutton = document.getElementById('add');
let inputfeild = document.getElementById('tobox')    
let outfield = document.getElementById('list-id')    

addbutton.addEventListener('click',async function(){
   if(inputfeild.value=='')
   {
      inputfeild.value="demo";
   }
   else{
   var para = document.createElement('li');
   let del =document.createElement('button');
    para.innerText=inputfeild.value;
    
       outfield.appendChild(para);
       
       
       inputfeild.value='';
       para.addEventListener('click',async function(){
         if(para.style.textDecoration=="line-through")
        para.style.textDecoration="none";
      else
      para.style.textDecoration="line-through";
       })

    
       para.addEventListener('dblclick',async function(){
        outfield.removeChild(para);
       })
      }
       
})