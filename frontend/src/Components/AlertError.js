import React from 'react'
import { useSelector } from 'react-redux'
import Alert from 'react-bootstrap/Alert';


export default function AlertError() {
    const error = useSelector((state)=>state.AlertReducer)
  return (
    <div>
      {
        error.map((el)=>
        <Alert key={el.id} variant="danger">
        {el.msg}
      </Alert>)
      }
    </div>
  )
}
