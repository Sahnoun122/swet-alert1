function succes(msg){
    alert(msg)
}
window.alert = function(message){
    const alert = document.createElement('div');
    alert.classList.add('alert');
    const alertbutton = document.createElement('button');
    alertbutton.classList.add('suc-btn')
    alertbutton.innerText= 'ok';
     
            
    alert.innerHTML= `<span style="padding:10px;"> ${message}</span>`;
    alert.appendChild(alertbutton);
    alertbutton.addEventListener('click', (e)=>{
        alert.remove();
    });
 
    document.body.appendChild(alert);
}