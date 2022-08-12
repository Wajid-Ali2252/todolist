function addelement()
{   
    document.getElementById('error').innerHTML="";
   let data=document.getElementById('myInput').value;
   if(data == "")
   {
     document.getElementById('error').innerHTML="Please Enter Value";
   }else{
    let box=document.getElementById('box');
    let li=document.createElement('li');
    li.classList.add('list');
    let li_text=document.createTextNode(data);
    li.appendChild(li_text);
    // 
    let a=document.createElement('a');
    a.textContent='x';
    a.href="javasript:void(0)";
    a.classList.add('remove');
    li.appendChild(a);

   
    let ele_pos=box.firstElementChild;
    if(ele_pos===null)
    {
        box.appendChild(li);
    }
    else{
        box.insertBefore(li,ele_pos);
    }
   }
   document.getElementById('myInput').value="";
   let del_data=document.querySelector('.remove');
    del_data.addEventListener('click', function()
    {
        document.querySelector('.list').style.display= "none";
    });
   
   
   
}