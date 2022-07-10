import { useEffect, useState } from "react"
import axios from 'axios'
import { axiosInstance } from './config'

const useFetch = (url, info1, info2, info3)=>{
    const [data, setData] = useState([])
    const [laoding, setlaoding] = useState(false)
    

   useEffect(()=>{
      const fetchData = async ()=>{
        setlaoding(true)
        try {
            const res = await axiosInstance.get(url)
            setData(res.data)
        } catch (error) {
            console.log(error);
        }
         setlaoding(false)
      }
     fetchData();
   }, [url, info1, info2, info3])
   return {data, laoding}
}


export default useFetch