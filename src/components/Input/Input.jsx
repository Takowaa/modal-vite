import styles from './Input.module.css'


const Input = ({onChange,value,placeholder,type,label,name}) => {

  return (
  <>
    {label && (
      <label htmlFor={name}>{label}</label>
    )}
      <input id={name} value={value}  onChange={onChange} placeholder={placeholder} className={styles.input}
             type={type}/>

  </>
  );
};

export default Input;