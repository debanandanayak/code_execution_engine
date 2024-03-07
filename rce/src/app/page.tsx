"use client"


import InputField from '@/components/InputField'
import OutputField from '@/components/OutputField'
import CodeEditor from '@/components/CodeEditor'
import React,{useState} from 'react'
import useCodeRunner from '@/hooks/useCodeRunner'



export default function Home() {
   const [formData, setFormData] = useState({ code: "", input: "", language: "cpp" })
   const [output,runCode,runningStatus] = useCodeRunner()
   function handleChange(e: React.ChangeEvent<HTMLTextAreaElement| HTMLSelectElement>) {
      if(typeof e =='string')
         setFormData({ ...formData, code: e })
      else{
         const key = e.target.name
         const val = e.target.value
         console.log(key,val);
         
         setFormData({ ...formData, [key]: val })
      }
   }
   async function handleClick() {
      console.log(formData);
      await runCode(formData)
      
   }
   return (
      <>
         <div className="main" style={{ display: "flex"}}>
            <div style={{ width: "50vw" }} >
               <CodeEditor height={"90vh"} onChange={handleChange} onClick={handleClick} onSelectLanguage={handleChange} />
            </div>
            <div style={{ width: "50vw" }}>
               <InputField height={"25vh"}  onChange={handleChange} />
               <OutputField height={"55vh"} value={output.output+output.error}/>
               {runningStatus && <p>Running...</p>}
               {!runningStatus && <p>Run to get Output...</p>}
            </div>
         </div>
      </>
   )
}
