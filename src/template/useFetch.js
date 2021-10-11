import { useState , useEffect } from "react"
const useFetch = (url)=>{
    const [data , setData] = useState(null);
    useEffect(()=>{
        fetch(url)
        .then(res=>{
            return res.json();
        }).then(result=>{
            setData(result);
        });
    },[url]);
    return data;
}

export default useFetch;