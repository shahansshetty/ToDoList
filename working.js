let addbutton = document.getElementById('add');
let inputfeild = document.getElementById('tobox')    
let outfield = document.getElementById('list-id')    

addbutton.addEventListener('click', function(){
   if(inputfeild.value=='')
   {
      inputfeild.value="demo";
   }
   else{
      
   const para = document.createElement('li');
   const del =document.createElement('button');
   del.textContent='delete';
   del.className="delete";
   
   
    para.innerText=inputfeild.value;
    para.appendChild(del);
       outfield.appendChild(para);
       
       localStorage.setItem(inputfeild.value,inputfeild.value)
       inputfeild.value='';
   


   
       para.addEventListener('click', function(e){
         if(para.style.textDecoration=="line-through")
        para.style.textDecoration="none";
      else
      para.style.textDecoration="line-through";

        
       })



    del.addEventListener('click', function()
       {
        localStorage.removeItem(para.innerText,para.innerText);
         para.remove();
         
       })
    }
})



