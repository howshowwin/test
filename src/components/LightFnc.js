import React from 'react'

// function LightFuc(props) {
//   return (
//     <>
//        <h1 style={{color:props.color}}>
// 量
//     </h1>
//     </>
//   )
// }

function LightFuc({color="gold"}) {
    return (
      <>
         <h1 style={{color:color}}>
  量
      </h1>
      </>
    )
  }
  

export default LightFuc