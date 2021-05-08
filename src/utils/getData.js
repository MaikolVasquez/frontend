

async function getData() {
  
    let data = await fetch("http://localhost:3000/data")
    res = await data.json() 
    return await res        
}


export default getData