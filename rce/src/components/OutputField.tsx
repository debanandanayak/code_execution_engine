import React from 'react'
import { Output } from '../../types'
import styles from '../styles/InputField.module.css'
type OutputProps = {
    height?:number | string,
    value?: string,
}
function OutputField(props:OutputProps) {
    return (
        <div className={`${styles.box_container} ${styles.output}`} >
            <label htmlFor="output">Output</label>
            <textarea style={{height:props.height}} value={props.value} className={styles.textarea} disabled={true} name="output"></textarea>
        </div>
    )
}

export default OutputField