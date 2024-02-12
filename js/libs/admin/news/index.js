
import { URL_CATEGORIES, URL_NEWS } from "../../api/URLS.js"
import {deleteHttp, get, post } from "../../api/clientshttps.js"
import { printNews } from "./functionsDOM.js"

// selectores
const formNews =document.getElementById("formNews")
 export const nameNotice=document.getElementById("nameNotice")
 export const urlImage=document.getElementById("urlImage")
 export const idCategory=document.getElementById("idCategory")
 export const contentNotice=document.getElementById("contentNotice")
 export const idNewsUpdate =document.getElementById(" idNewsUpdate")


// eventos

document.addEventListener("DOMContentLoaded",()=>{
    loadCategories();
    getNews()
})


formNews.addEventListener("click",(e)=>{
    e.preventDefault();
 if (idNewsUpdate.value) {
    updateNew()
    
 }else{
    createNews()
}
})

 async function createNews(){
    if (!idCategory.value) {
       console.error("la categoria es obligatoria"); 
       return;
    }

    const user=JSON.parse(localStorage.getItem("user"));
    
    const  newsNotice ={
        name:nameNotice.value,
        image:urlImage.value,
        categoriyId:idCategory.value,
        content:contentNotice.value,
        userId:user.id,
        publicationDate:new Date().toISOString().split("T")[0],


    }

    await post(URL_NEWS,newsNotice)


}
 async function loadCategories() {
    const categories = await get(URL_CATEGORIES);
     
        categories.forEach((category) => {
        const  option=document.createElement("option");
        option.textContent=category.name;
        option.value=category.id;
        idCategory.appendChild(option)
    });

    
}

async function getNews() {
  const news =await get (`${URL_NEWS}?_embed=category&_embed=user`);
  printNews(news)
}

 export async function deletNew(){
    await deleteHttp(`${URL_NEWS}/${id}`)
}
async function updateNew () {
    const  newsNotice ={
        name:nameNotice.value,
        image:urlImage.value,
        categoriyId:idCategory.value,
        content:contentNotice.value,
        userId:user.id,
        publicationDate:new Date().toISOString().split("T")[0],


    }
    await update (`${URL_NEWS}/${idNewsUpdate.value}`,newsNotice)
}