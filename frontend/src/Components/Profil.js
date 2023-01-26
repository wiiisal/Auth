import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_current } from '../Redux/Action/Action'

const Profil = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(get_current())
  },[dispatch])

  const user=useSelector((state)=>state.UserReducer.users)
  return (
    <div>
      <h1>{user.email}</h1>
    </div>
  )
}

export default Profil


