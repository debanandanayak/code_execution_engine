import { useState } from "react"
import { Output,FormData } from "../../types"



const initialOutput:Output = {
  id: "",
  status: "code uploaded",
  input: "",
  output: "",
  error: "",
  time: 0,
  isCompleted: false,
}



function useCodeRunner():[Output,(f:FormData)=>Promise<void>,boolean] {
  const [output, setOutput] = useState(initialOutput)
  const [runningStatus, setRunningStatus] = useState(false)



  async function postData(formData:FormData) {
    setRunningStatus(true)
    setOutput(initialOutput)
    const data = await fetch("/api/ide/run", {
      method: "POST",
      body: JSON.stringify(formData),
    })
    const jsonResponse = await data.json()
    await getOutput(jsonResponse.id)
  }



  async function getOutput(id:string) {

    const url = `/api/ide/run?id=${id}`
    let tryCount = 0
    let intervalId = setInterval( async () => {
      console.log("Calling for output")
      
      tryCount++
      let res = await fetch(url)
      let jsonResponse = await res.json()
      console.log(jsonResponse.isCompleted)
      
      if(jsonResponse.isCompleted || tryCount == 4){
        setRunningStatus(false)
        setOutput(jsonResponse)
        clearInterval(intervalId)
      }
      if(tryCount == 4 && jsonResponse.isCompleted == false){
        setRunningStatus(false)
        setOutput({...initialOutput,isCompleted:false,error:"Something went wrong"})
        clearInterval(intervalId)
      }
    },1000)
    
  }

  return [output, postData, runningStatus]
}







export default useCodeRunner

