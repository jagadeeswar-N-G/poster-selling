import React, { useContext } from 'react'
import { AuthContext } from './authProvider';
import { Button } from './ui/button';
import Link from 'next/link';


const RemoveItem = ({itemId}: any) => {
    const { removeItem }: any = useContext(AuthContext);
  return (
    <button
    className='text-red-500'
    onClick={()=>{removeItem(itemId)}}
    >Remove</button>
  )
}

export default RemoveItem