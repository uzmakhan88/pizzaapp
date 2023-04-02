import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams} from 'react-router-dom';
import pizza from "../Images/packet.png";

const Singleproduct = () => {
    const[product,setProduct] = useState({});
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);

    // useEffect(()=>{

    //     fetch("/api/products/${params?._id}").then(res => res.json()).then(product => {
    //         console.log(product)
    //         setProduct(product)
    //     })
    // },[])
//   useEffect(()=>{
//     fetch(`/api/products/${params._id}`).then((res)=>{
//         res.json().then((product)=>{
//             console.log(product)
//         })
//     })
//   },[])

  return (
    <div className='container mx-auto mt-12'>
        <button className='mb-12 font-bold' onClick={()=>{navigate("/")}}>Back</button> 
        <div className='flex'>
            <img src={pizza} alt="" />
            <div className='ml-16'>

                    <h1 className='text-xl font-bold'>Havana special</h1>
                    <div className='text-md'>Small</div>
                    <div className='font-bold mt-2'>$ 400</div>
                    <button className='bg-orange py-1 px-8 rounded-full mt-4 font-bold' >Add to Cart</button>
            </div>

        </div>
      
    </div>
  )
}

export default Singleproduct
