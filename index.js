
 function  logar(){
 
    var input1 = document.getElementById("usuario").value;
    var input2 = document.getElementById("senha").value;
    var res = document.getElementById('mensagem')
    if(input1  === 'Admin' && input2 === 'Admin'){
    
         location.href="cadastro.html"
    }else{
        res.innerHTML = '';
       res.innerHTML = ('Usuario ou Senha Invalidos')
     
       
    }
        

 }
 

    
