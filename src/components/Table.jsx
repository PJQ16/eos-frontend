import React from 'react'

export default function Table({children,design}) {
  return (
        <div className="table-responsive">
          <table className={`table align-items-center ${design}`}>
            <tbody>
             
              {children}
              
            </tbody>
          </table>
        </div>
  )
}
