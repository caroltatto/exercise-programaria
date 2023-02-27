document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

 if (document.getElementById("nome").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementById("telefone").value != ""){
      alert("Muito bem! Você receberá as informações por email!")
 }else{
      alert("Por favor, preencha os campos nome e email!")
    }
   
  }