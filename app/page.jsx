'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const rout =useRouter();
  const[show,setShow]=useState(false);
  const[ruko,setruko]=useState(false);
  const[time1,setTime1]=useState(false);
  const[time2,setTime2]=useState(false);

  function shw(){
    if(!show){
    setruko(true);
    setTimeout(()=>{
      setShow(true);
    },5000)
    setTimeout(()=>{
      setruko(false);
    },5000)
    setTimeout(()=>{
      setTime1(true);
    },6000)
    setTimeout(()=>{
      setTime2(true);
    },7000)
  }else{
    setruko(false);
    setShow(false);
    setTime1(false);
    setTime2(false);
  }
     
  }
  return (
       <>
       <h1>hello YoGita BABA </h1>
        {/* <button onClick={()=>{rout.push('/yogbababirthday')}}>Click here</button> */}
        <div className='pr'>
        <button onClick={shw} >
          {
        !show?
        <span> chal click kr fatafat yogi bhai tera suprise next hai</span>:
        <span>&#128562;</span>
        }
        </button>

        {ruko?<h3>Ruk yaar Yogita wait kr suprise k liye</h3>:null}

        {show?
        <>
         <div className='cont'>
             <p >Herzlichen glückwunsch für deine Geburtstag</p>
            {
               time1? <p className='kh'>Ich wünsche dir einen schönen Tag</p>:null
            }
            {
                time2?<p className='kh2'>Feier schön!</p>:null
            }
         </div>
         <button onClick={()=>{rout.push('/yogbababirthday')}} >Waise shuprise aage hai &#128540;</button>
         </>
         :null
        }


        </div>


       </>

  );
}
