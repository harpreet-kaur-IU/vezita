import React,{useState,useEffect} from 'react'
import styles from './css/subscription.module.css'
export default function BillPlan(props) {
    const [data,setData] = useState("")
    const [id,setId] = useState("")
    useEffect(()=>{
        var type = "monthly";
        if(props.type == 0){
            type = "monthly";
        }else{
            type = "yearly";
        }
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
        
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}plan?packageType=${type}`, requestOptions)
        .then(response => response.text())
        .then(result =>{
            const parsedResult = JSON.parse(result)
            setData(parsedResult.plans[0])
        })
        .catch(error => console.log('error', error));
       
    },[])

    const planHandler = () =>{
        props.handler(data.packageType,data.salePrice)
    }
  return (
    <div className={`${styles["plan-wrapper"]} mt-7 col-12`}>
        {props.type == 0 && 
            <div className={`${styles["price"]} d-flex d-align-center d-justify-space-between`}>
                <div>
                    <h2 className='f-600 l-40 text-blue-1'>{data.currency}{data.packagePrice}/per month</h2>
                    <h1 className='f-600 l-40 text-blue-1 mt-4'>{data.currency}{data.salePrice}/per month</h1>
                </div>
                <div className='p-relative'>
                    <img src="star.svg" alt="offer image"/>    
                    <div className={`p-absolute ${styles["discount-text-absolute"]}`}>
                        <h4 className='text-green-4 f-500 l-26'>Save</h4>
                        <h3 className='text-green-4 f-800 l-28'>{data.discountPercent}%</h3>
                    </div>
                </div>
            </div>
        }
        {props.type == 1 && 
        <div className={`${styles["price"]} d-flex d-align-center d-justify-space-between`}>
            <div>
                <h2 className='f-600 l-40 text-blue-1'>{data.currency}{data.packagePrice}/per year</h2>
                <h1 className='f-600 l-40 text-blue-1 mt-4'>{data.currency}{data.salePrice}/per year</h1>
            </div>
            <div className='p-relative'>
                <img src="star.svg" alt="offer image"/>    
                <div className={`p-absolute ${styles["discount-text-absolute"]}`}>
                    <h4 className='text-green-4 f-500 l-26'>Save</h4>
                    <h3 className='text-green-4 f-800 l-28'>{data.discountPercent}%</h3>
                </div>
            </div>
        </div>
        }
        <h4 className='f-600 l-26 text-white mt-5'>Benefits</h4>

        {data && data.benefits.map((item)=>(
            <div className='d-flex d-align-center mt-4'>
                <img src="tick.png" alt="checked image"/>
                <h5 className='f-400 l-22 text-white ml-2'>{item}</h5>
            </div>
        ))}
        <button className='btn btn-white offset-4 col-4 mt-8' onClick={planHandler}>Start your free trial</button>
    </div>
  )
}
