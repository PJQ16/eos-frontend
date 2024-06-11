import React, { useEffect, useState } from 'react'

export default function Spinner() {
    const [spinners,setSpinners] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setSpinners(false);
        },2000)
    })
  return (
    <div>
        {
            spinners ? (
                 <>
                <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-light" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                </>   
            )
            :
            (
                <>
                
                </>
            )
        }

    </div>
  )
}
