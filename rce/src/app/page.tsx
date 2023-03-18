"use client"


import InputField from '@/components/InputField'
import OutputField from '@/components/OutputField'
import CodeEditor from '@/components/CodeEditor'
import React,{useState} from 'react'
import useCodeRunner from '@/hooks/useCodeRunner'



export default function Home() {
   const [formData, setFormData] = useState({ code: "", input: "", language: "c++" })
   const [output,runCode,runningStatus] = useCodeRunner()
   function handleChange(e: React.ChangeEvent<HTMLTextAreaElement| HTMLSelectElement>) {
      const key = e.target.name
      const val = e.target.value

      setFormData({ ...formData, [key]: val })
   }
   async function handleClick() {
      console.log(formData);
      await runCode(formData)
      
   }
   return (
      <>
         <div className="main" style={{ display: "flex" }}>
            <div style={{ width: "50vw" }} >
               <CodeEditor height={"90vh"} onChange={handleChange} onClick={handleClick} onSelectLanguage={handleChange} />
            </div>
            <div style={{ width: "50vw" }}>
               <InputField height={"30vh"}  onChange={handleChange} />
               <OutputField height={"55vh"} value={output.output}/>
               {runningStatus && <p>Running...</p>}
               {!runningStatus && <p>Run to get Output...</p>}
            </div>
         </div>
      </>
   )
}
