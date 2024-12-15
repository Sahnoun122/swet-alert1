function info(msg){
    alert(msg)
}
window.alert = function(message , timeout= null){
    const alert = document.createElement('div');
    alert.classList.add('alert');
    const alertbutton = document.createElement('button');
    alertbutton.innerText= 'ok';
    alert.setAttribute('style' , `
         position:fixed;
         top:100px;
         left:50%;
        padding:20px;
        border-radius:10px;
        box-shadow: 0 10px 5px 0 #00000022;
        display:flex;
        flex-direction :column;
         border:1px solid #333;
         transform: translateX(-50%);
        `);
        alertbutton.setAttribute('style', `
              border:1px solid #333;
              background: blue;
              border-radius: 5px;
              padding: 5px;
            `)
    alert.innerHTML= `<span style="padding:10px;"> ${message}</span>`;
    alert.appendChild(alertbutton);
    alertbutton.addEventListener('click', (e)=>{
        alert.remove();
    });
 
    document.body.appendChild(alert);
}