import style from './Form.module.css'

const Form = ({children}) => {

   return (
       <form className={style.form}>{ children }</form>
   ) 
}

export default Form;