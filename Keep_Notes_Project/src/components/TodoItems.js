import React from 'react'

export default function TodoItems(props) {
  let tit = {
    margin : '0 3vh 7vh 0'
  }
  return (
    <div>
      <h5 className='py-3px'>{props.values.Title}</h5>
      <p>{props.values.Disc}</p>
      <button style={tit} className='btn btn-sm btn-danger my-3vh' onClick={()=>{props.onDelete(props.values)}}>Delete</button>
      <hr/>
    </div>
  )
}
