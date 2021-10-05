import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import GithubUsers from './GithubUsers'

const UseEffectAPI = ()=>
{
    const[user,setUser]= useState([])
    const[loading, setLoading] =  useState(true);
   
    const getUser = async () =>
    {
        setLoading(false);
        try{
       const  response= await fetch("https://api.github.com/users");
          setUser(await response.json());
       // console.log(data);
        }catch(error)
        {
            console.log("my error is "+error);
        }
    }
    useEffect(()=>{
        getUser();
    },[])
    
    if(loading)
    {
       return <Loading />
    }
   
    return(
      <>
        <GithubUsers user={user}/>
      </>
    )
}

export default UseEffectAPI;