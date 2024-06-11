import React from 'react'

export default function Body({ children,col,title,color }) {
  return (
    <div className={`col-lg-${col} mb-lg-0 mb-4`}>
      <div className={`card  bg-gradient-${color} z-index-2 h-100 `}>
        <div className="card-header pb-0 pt-3 bg-transparent">
          <h6 className="text-capitalize">{title}</h6>
        </div>
        <div className="card-body p-3">
          {children}
        </div>
      </div>
  </div>
  
  )
}
