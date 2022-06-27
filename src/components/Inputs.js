import React from 'react'

function Inputs({props,value,handleChange}) {
  return (
    <div className="input-box" id={props.id}>
        <p className="input-name" style={props.titleStyle}>{props.title}</p>
        <label style={props.labelStyle}>Label</label>
        {props.iconLeft 
        ? <span 
            style={{ "marginLeft": "0.7rem"}} className="material-symbols-outlined">call</span> :
            null}
        {props.multiline
        ? <textarea 
            style={props.areaStyle}  
            rows={props.rows}
            value={props.value ? props.value : value}
            onChange={handleChange} 
            cols="50"
          >
          </textarea> 
        : <input 
            type={props.inputType ? props.inputType : "text"}
            name="name"
            placeholder='Placeholder'
            style={props.inputStyle} 
            disabled={props.disabled}
            value={props.disabled ? null :
                  props.value ? props.value : value}
            onChange={handleChange} 
          />}   
        {props.iconRight 
        ? <span 
            style={{  "marginLeft": "12.3rem", "textAlign":"left" }}        className="material-symbols-outlined">lock</span> 
        : null}
        <p style={props.helperStyle}>{props.helper}</p>
    </div>
  )
}

export default Inputs