import React from 'react'

export default function InputWrapper({ icon, children, className, cursor }) {
  return (
    <div
      style={cursor ? { cursor: cursor } : {}}
      className={className ? `input-wrapper ${className}` : 'input-wrapper'}
    >
      {icon}
      {children}
    </div>
  )
}
