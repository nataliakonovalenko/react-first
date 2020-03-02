import React from 'react';
import styles from './FormsControls.module.css'
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <textarea {...input} {...props} />
            <br/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <input {...input} {...props} />
            <br/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, component, validate, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
             name={name}
             component={component}
             validate={validate}
             {...props}/> {text}
    </div>)