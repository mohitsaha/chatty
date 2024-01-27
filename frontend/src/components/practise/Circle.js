import React, { useState } from 'react'

const Circle = () => {
   const [circle,setCircle] = useState([]);
   const [count,setCount] = useState(0);
   const handleAdd=()=>{
        setCircle((arr)=>[...arr,{id:arr.length+1,isGray:false}]);
   }
   const handleClick=(id)=>{
         let temp = circle[id-1];
         temp.isGray = !temp.isGray;
        setCircle(()=>[...circle])
        const ans = circle.reduce((accumulated,current)=>{
            if(current.isGray){
                return parseInt(accumulated)+1;
            }else{
                return parseInt(accumulated);
            }
        },0)
        setCount(()=>ans);
   }
  return (
    <div>
        <button onClick={handleAdd}>add circle </button>
        <p>number of grey color circle :{count}</p>
            <div onClick={(e)=>console.log(e)}>
                {circle.map((e)=>{
                   return <button key={e.id} className='circle' style={{background : e.isGray ? "grey":"" }}></button>
                })}
        </div>
        
    </div>
  )
}
export default Circle;
