function warning(msg){
    alert(msg);
}
window.alert = function(message){
    const alert = document.createElement('div');
    alert.classList.add('alert');
    const buttonalerte = document.createElement('button');
    buttonalerte.innerText='ok';
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
     width:200px ;
    height: 100px;
    background-image: url(../pages/img/warning.png);
    background-size: 70px;
    background-position: center; 
    background-repeat: no-repeat; 
             
        `);
        buttonalerte.setAttribute('style' ,`
                border:1px solid #333;
                background: rgb(243, 50, 50);
                border-radius: 5px;
                padding: 5px;
                width:80px ; 
                margin-left:60px;
                margin-top:50px;
                cursor: pointer;
            
            `)
        alert.innerHTML= `<span style="padding:10px;"> ${message}</span>`;

        alert.appendChild(buttonalerte)
        buttonalerte.addEventListener('click' , (e)=>{
            alert.remove();
        })

        document.body.appendChild(alert);

}