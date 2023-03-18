import React from 'react'
import styles from '../styles/InputField.module.css'
type InputFieldPros = {
    height?:number | string,
    value?:string,
    onChange?: (e:React.ChangeEvent<HTMLTextAreaElement>)=>void 
}
function InputField({height,onChange,value}:InputFieldPros) {
    return (
        <div className={styles.box_container}>
            <label htmlFor="input">Input</label>
            <textarea value={value} style={{height}} className={styles.textarea} name="input" onChange={onChange}></textarea>
        </div>
    )
}

export default InputField