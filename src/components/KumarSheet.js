import React, { useRef } from 'react'

function KumarSheet() {
     let nameInputRef =useRef();
     let RollInputRef =useRef();
     let telInputRef = useRef();
     let hinInputRef =useRef();
     let engInputRef =useRef();
     let matInputRef =useRef();
     let sciInputRef =useRef();
     let socInputRef =useRef();
     let outputSpam= useRef();

     let telSpanRef= useRef();
     let engSpanRef= useRef();
     let hinSpanRef= useRef();
     let matSpanRef= useRef();
     let sciSpanRef= useRef();
     let socSpanRef= useRef();

  return (
    <div>
     <form>
      <h1>STUDENT MARKSHEET</h1>
       <div>
         <label>Name</label>
         <input ref={nameInputRef}></input>
         <span></span>
       </div>
       <div>
         <label>Roll Number</label>
         <input ref={RollInputRef}></input>
         <span></span>
       </div>
       <div>
         <label>telugu</label>
         <input ref={telInputRef}
         onChange={()=>{
          let telMarks=Number(telInputRef.current.value);
          telSpanRef.current.innerHTML=telMarks>=35?"pass":"fail";
          telSpanRef.current.style.backgroundColor=telMarks>=35?"green":"red";
         }}
         ></input>
         <span ref={telSpanRef}></span>
       </div>
       <div>
         <label>English</label>
         <input ref={engInputRef} 
         onChange={()=>{
          let engMarks=engInputRef.current.value;
          engSpanRef.current.innerHTML=engMarks>=35?"pass":"fail"
          engSpanRef.current.style.backgroundColor=engMarks>=35?"green":"red";
         }}></input>
         <span ref={engSpanRef}></span>
       </div>
       <div>
         <label>Hindi</label>
         <input ref={hinInputRef} onChange={()=>{
          let hinMarks=hinInputRef.current.value;
          hinSpanRef.current.innerHTML=hinMarks>=35?"pass":"fail";
          hinSpanRef.current.style.backgroundColor=hinMarks>=35?"green":"red";
         }}></input>
         <span ref={hinSpanRef}></span>
       </div>
       <div>
         <label>maths</label>
         <input ref={matInputRef}
         onChange={()=>{
          let matMarks=matInputRef.current.value;
          matSpanRef.current.innerHTML=matMarks>=35?"pass":"fail";
          matSpanRef.current.style.backgroundColor=matMarks>=35?"green":"red";
         }}></input>
         <span ref={matSpanRef}></span>
       </div>
       <div>
         <label>Science</label>
         <input ref={sciInputRef}onChange={()=>{
          let sciMarks=sciInputRef.current.value;
          sciSpanRef.current.innerHTML=sciMarks>=35?"pass":"fail";
          sciSpanRef.current.style.backgroundColor=sciMarks>=35?"green":"red";
         }}></input>
         <span ref={sciSpanRef}></span>
       </div>
       <div>
         <label>Social</label>
         <input ref={socInputRef}on onChange={()=>{
          let socMarks =socInputRef.current.value;
          socSpanRef.current.innerHTML=socMarks>=35?"pass":"fail";
          socSpanRef.current.style.backgroundColor=socMarks>=35?"green":"red"
         }}></input>
         <span ref={socSpanRef}></span>
       </div>
       <div>
          <button type="reset"onClick={()=>{
          let name=nameInputRef.current.value;
          let Rollnumber= Number(RollInputRef.current.value);
          let telMarks= Number(telInputRef.current.value);
          let engMarks= Number(engInputRef.current.value);
          let hinMarks= Number(hinInputRef.current.value);
          let matMarks= Number(matInputRef.current.value);
          let sciMarks= Number(sciInputRef.current.value);
          let socMarks= Number(socInputRef.current.value);

          let TotalMarks = telMarks+engMarks+hinMarks+matMarks+sciMarks+socMarks;
          let per=( TotalMarks/600)*100;
          


               alert(`the total marks ${TotalMarks} the percentage  of the student is ${per}% `)
               // console.log(hi)
               outputSpam.current.innerHTML=(`the total marks ${TotalMarks} the percentage  of the student is ${per}% `);
          }}>submit</button>

       </div>
       <div><p ref={outputSpam}>click the submit button</p></div>
     </form>
    </div>
  )
}

export default KumarSheet