import React from 'react'
import styles from '../styles/CodeEditor.module.css'

type CodeEditorProps = {
    height?:number | string,
    sourceCode?:string,
    onClick ?: ()=>void,
    onChange ?: (e:React.ChangeEvent<HTMLTextAreaElement>) => void,
    onSelectLanguage ? :(e:React.ChangeEvent<HTMLSelectElement>)=>void

}
export default function CodeEditor({sourceCode,onClick,onChange,height,onSelectLanguage}:CodeEditorProps) {
    return (
        <div className={styles.code_container}>
            <div className={styles.action}>
                <select name="language" className={styles.combo_box} onChange={onSelectLanguage}>
                    <option value="c++">CPP</option>
                    <option value="node">Node JS</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                </select>
                <input type="button" className={styles.run} value="Run" onClick={onClick}/>
            </div>
            <textarea style={{height}} name='code' value={sourceCode} onChange={onChange}></textarea>
        </div>
    )
}
