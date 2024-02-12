
 export async function post (url, info) {
    try {
        const reponse=await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(info)

    });
    const data =  await reponse.json();
    return data;
    } catch (error) {
     console.log(error);
    }
    
    
}


export async function get(url){
    try {
        const reponse = await fetch(url);
        const data =  await reponse.json();
        return data;
        
    } catch (error) {
        console.log(error);
        
    }
}

export async function deleteHttp(url){

    try {
        await fetch(url,{
            method:"DELETE",
           
        })
    } catch (error) {
        console.log(error);
        
    }
}


export async function update(url,info){
    try {
        const reponse = await fetch (url,{
       method:"PUT",
       headers:{
        "Content-Type": "application/json",
       },
       body:JSON.stringify(info)
    })
    const data =  await reponse.json();
    return data; 
    } catch (error) {
        console.log(error);
        
    }
   
}

