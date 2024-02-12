
import {deleteHttp, get,post, update} from "../../api/clientshttps.js"
import { URL_CATEGORIES }  from "../../api/URLS.js"
import { idCategoryUpdate, printCategories } from "./functionDOM.js"
// selectores
const formCategories=document.getElementById("formCategories")
export const nameCategories=document.getElementById("nameCategory")
export const descriptionCategory =document.getElementById("descriptionCategory")



formCategories.addEventListener("submit",(e)=>{
e.preventDefault();
if(idCategoryUpdate.value){
updateCategory(idCategoryUpdate.value)
}else{
createCategories() 
}
// actualizar

})

document.addEventListener("DOMContentLoaded",()=>{
    getCategories();
})


async function  createCategories() {
    const newCategory={
        name:nameCategories.value,
        description:descriptionCategory.value
    };

   await post (URL_CATEGORIES,newCategory) 
}

async function getCategories(){
   const data = await get(URL_CATEGORIES)
   console.log(data);

 printCategories(data)

}

 export async function deleteCategory(id) {
    console.log("eliminando id",id);
   
    await deleteHttp(`${URL_CATEGORIES}/${id}`)
}

export async function  updateCategory(id){
 const  categoryUpdate={
    name:nameCategories.value,
    description:descriptionCategory.value
 };
 await update(`${URL_CATEGORIES}/${id}`,categoryUpdate)

}




 