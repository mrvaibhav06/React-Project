import React from 'react'

const InputItem = ({label, placeholder ='',name,onchange,type='text',isTextArea = false, className}) => {
  return (
    <div className={`row ${className}`}>
        <div className='input'>
            {!isTextArea ? <input onChange={onchange} placeholder={placeholder} name={name} type={type} />
            : <textarea onChange={onchange} placeholder={placeholder} name={name}></textarea>}
            <label>{label}</label>
        </div>
      
    </div>
  )
}

export default InputItem
