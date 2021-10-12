import style from './style.module.css'

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.form_control} ${hasError && style.error}`}>
            {hasError && <div className={style.error_span}><span>{meta.error}</span></div>}
            <div>{props.children}</div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta,child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta,child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}