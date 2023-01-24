import axios from 'axios'
import {REGISTER, LOGIN , GET_CURRENT} from '../ActionType/ActionType'
 
 export const register=(data)=>async(dispatch)=>{
    try {
        const res=await axios.post('/user/register', data).then((res)=>console.log(res.error.response.data))
        dispatch({type:REGISTER, payload: res.data})
        
    } catch (error) {
        if(error.response.data){
            (error.response.data.errors.forEach(element => {
                alert(element.msg)
            }))
        }
     
    }
}
export const login =(data,navigate)=>async(dispatch)=>{
try {
const res= await axios.post('/user/login',data).then((res)=>{
    if(res.data.msg==="welcome home"){
        navigate("/profile")
    }
})
dispatch({type:LOGIN,payload: res.data})

} catch (error) { console.log(error)
    
}
}
export const get_current=()=>async(dispatch)=>{
    const config={Headers:{token:localStorage.getItem("token")}}
    try {
    const res=await axios.get ('/user/current',config)
    dispatch({type:GET_CURRENT , payload:res.data})
} catch (error) {
    console.log(error)
}
}
