// import React from 'react';
// const NewMessageDot =()=>{
//   <span className="badge badge-error" title="New message"
//    style={{fontSize:'0.65rem', padding:'2px 8px', flexShrink:0}}> NEW </span>
// };
// export default NewMessageDot;
export default function NewMessageDot(){
  return(
    <span
    style={{
      display:"inline-block",
      backgroundColor:"red",
      color:"white",
      padding:"2px 8px",
      borderRadius:"6px",
      fontSize:"11px",
      fontWeight:"bold"
    }}
    >
    NEW
    </span>
  );
}