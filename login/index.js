import{URL_USERS} from "../js/libs/api/URLS.js"

// selectores
const formlogin=document.getElementById("formlogin");
const email=document.getElementById("email");
const password =document.getElementById("password");



formlogin.addEventListener("submit",(e)=>{
    e.preventDefault();

  consumirApi()
})


async function consumirApi() {
        const respuestas=await fetch(`${URL_USERS}?email=${email.value}`);
        const data = await respuestas.json();
        
    
    if(!data){
      console.error("email no registrado");
      return;
    }

    if (data[0].password !== password.value){
      console.error("contraseña invalida")
      return;
    }
   
    // ai del navegador da persitencia 1 llave el valo que se va a guardra el tiene dos reglas una es qe lo que va aguar hay que convertilo astring lo que yo quiero convertir a letra
    localStorage.setItem("user",JSON.stringify(data[0]));
    window.location.href="administrator.html"
   }







