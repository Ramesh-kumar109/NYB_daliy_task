import {useState,useEffect} from 'react'

function useFetch(url) {

    const [data,setData]=useState([]);
    const [load,setLoad]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const Controller= new AbortController();

        async function fetchdata(){
            try{
                const response= await fetch(url,{
               signal: Controller.signal
            });
                 if(!response.ok){
                    throw new Error("Failed to fetch the data");
                 }
                 
                const datas=await response.json();
                setData(datas);
            }catch(error){
                if(error.name !== "AbortError"){
                    setError(error.message);
                } 
                 }
                 finally{
                    if(!Controller.signal.aborted){
                        setLoad(false);
                    }


            }
            
        }
        fetchdata();
        return ()=>Controller.abort();
    },[url])
  return {
    data,error,load
  }
}

export default useFetch