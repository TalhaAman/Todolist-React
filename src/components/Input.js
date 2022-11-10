
import React, {useState, useRef, useEffect} from 'react';

const Input = ({label,userSubmit}) => {
  const [term , setTerm] = useState('');

  const formRef = useRef();
  useEffect(() => {
    if(!term){
      formRef.current?.reset();
    }
  },[term])
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    userSubmit(term);
    setTerm('');
  }

  return (
  <div>
    <form ref={formRef} onSubmit={onFormSubmit}>
      <label className='form-label'>{label}</label>
      <br/>
      <input className='form-input' type='text' onChange={e => setTerm(e.target.value)}></input>
    </form> 
  </div>
  )
}

export default Input;