import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers,selectUser,clearUsers,clearUser}) => {

const{handleSubmit,register,reset}= useForm()





    const submit=(data)=>{
console.log(data)

if(selectUser){
    axios.put(`https://users-crud1.herokuapp.com/users/${selectUser.id}/`, data)
    .then(()=>getUsers())
}else{
    axios.post(`https://users-crud1.herokuapp.com/users/`,data)
    .then(()=>getUsers())
    .catch(error => console.log(error.response?.data))
}

}

 
useEffect(()=>{
    if(selectUser){
        reset(selectUser)
        console.log('cambio' )
    }else{reset({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        birthday:""

})}

},[selectUser])

/*second functions */
const clear=(data)=>{
    console.log(data)
    axios.post(`https://users-crud1.herokuapp.com/users/`,data)
    .then(()=>clearUsers())
    
    .catch(error => console.log(error.response?.data))}
    
        
    useEffect(()=>{
        if(clearUsers){
            reset({
                first_name:"",
                last_name:"",
                email:"",
                password:"",
                birthday:""

            })
            console.log('cambio' )
        }
    
    },[clearUsers])
    




    
    return ( 
        <form className='container--form' onSubmit={handleSubmit(submit)} >
            <h2>New user</h2>
            <div className='son--form'><label htmlFor="first_name"><i className='bx bxs-user' ></i>  </label><input placeholder='First_name' {...register("first_name")}  id='first_name' type="text" /></div>
            <div className='son--form'><label htmlFor="last_name"><i className='bx bxs-user-plus' ></i> </label><input placeholder='Lasst_name' {...register("last_name")} id='last_name' type="text" /></div>
            <div className='son--form'><label htmlFor="email"><i className='bx bxs-envelope' ></i> </label> <input placeholder='Email' {...register("email")} id='email' type="email" /></div>
            <div className='son--form'><label htmlFor="password"><i className='bx bxs-lock-alt'></i> </label> <input placeholder='Password' {...register("password")} id='password' type="password" /></div>
            <div className='son--form'><label htmlFor="birthday"><i className='bx bxs-calendar'></i> </label><input placeholder='birthday' {...register("birthday")} id='birthday' type="date"/></div>
     <div>  <button  className='btn--form' >Update</button> <button className='btn--form'  onClick={clearUser}>clear</button> </div> 
        </form>
    );
};

export default UsersForm;