import { deletNew, idCategory, idNewsUpdate, nameNotice, urlImage } from ".";

const newsTbody=document.getElementById("news-tbody")

const btnOpenModalNews =document.getElementById("btnOpenModalNews")


export function printNews(news){

console.log(newsTbody);

news.forEach(tempNew => {
    const tr=document.createElement("tr")

    const  tdImage=document.createElement("td")
    const  tdTitle=document.createElement("td")
    const  tdContent=document.createElement("td")
    const  tdDate=document.createElement("td")
    const  tdUser=document.createElement("td")
    const  tdCategory=document.createElement("td")
    const  tdAction=document.createElement("td")
   
    const image=document.createElement("img")
    image.src=tempNew.image;
    image.width="50"
    image.height="50"
    image.classList.add("rounded-circle")

    const btnEdit=document.createElement("button")
    const btnDelete=document.createElement("button")
    btnEdit.classList.add("btn","btn-primary")
    btnDelete.classList.add("btn","btn-danger")
    btnEdit.textContent="Editar";
    btnDelete.textContent="Delet"

    btnEdit.addEventListener("click",()=>{
       loadInfoNew(tempNew)
    })
   
    btnDelete.addEventListener("click",()=>{
        deletNew(tempNew.id)
    })

    tdTitle.textContent=tempNew.name
    tdContent.textContent=tempNew.content
    tdDate.textContent=tempNew.publicationDate
    tdUser.textContent=tempNew.user.name
    tdCategory.textContent=tempNew.category.name
   
    tdImage.appendChild(image);
    tdAction.appendChild(btnEdit)
    tdAction.appendChild(btnDelete)

    tr.appendChild(tdImage)
    tr.appendChild(tdTitle)
    tr.appendChild(tdContent)
    tr.appendChild(tdDate)
    tr.appendChild(tdUser)
    tr.appendChild(tdCategory)
    tr.appendChild(tdAction)
   
    newsTbody.appendChild(tr)
});
}

function loadInfoNew(newTemp){
btnOpenModalNews.click()
 nameNotice.value = newTemp.name;
 urlImage.value = newTemp.image
 idCategory.value = newTemp.categoryID;
 contenNotice.value = newTemp.content;
 idNewsUpdate.value = newTemp.id
}
