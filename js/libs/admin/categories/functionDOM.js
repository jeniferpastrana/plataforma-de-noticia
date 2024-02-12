import { deleteCategory, nameCategories,descriptionCategory } from "../categories/index.js";

const categoriesTbody =document.getElementById("categorias-tbody")
export const idCategoryUpdate =document.getElementById("idCategoryUpdate")
export const category =document.getElementById("btnAddCategoryModal")


export function printCategories(categorias) {
   categoriesTbody.innerHTML ="" ;
    
    
    categorias.forEach(category => {
        
        const tr= document.createElement("tr")
        const tdID=document.createElement("td")
        const tdName=document.createElement("td")
        const tdDescription=document.createElement("td")
        const tdButtons=document.createElement("td")
        

        const btnEdit=document.createElement("button")
        const btnDelete=document.createElement("button")
        btnDelete.textContent="Eliminar";
        btnEdit.textContent="Editar";
        
        btnDelete.classList.add("btn","btn-danger");
        btnEdit.classList.add("btn","btn-primary");

        btnDelete.addEventListener("click",()=>{
           deleteCategory(category.id)
        })
        btnEdit.addEventListener("click",()=>{
          loadinfoCategory(category)
        })

        tdID.textContent=category.id;
        tdName.textContent=category.name;
        tdDescription.textContent=category.description;
        

        tdButtons.appendChild(btnDelete);
        tdButtons.appendChild(btnEdit);

        tr.appendChild(tdID)
        tr.appendChild(tdName)
        tr.appendChild(tdDescription)
        tr.appendChild(tdButtons)
        categoriesTbody.appendChild(tr)
    });
}

function loadinfoCategory(category){
nameCategories.value =category.name;
nameCategories.value=category.description;
idCategoryUpdate.value =category.id;
btnAddCategoryModal.click();
}
