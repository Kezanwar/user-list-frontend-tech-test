import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HeaderNav() {
  const navigate = useNavigate()
  const path = window.location.pathname
  return (
    <div className="headerNav">
      <h1 onClick={() => navigate('/')} className="title">
        <span className="logo-blue">Home</span>
      </h1>
      <button
        style={
          path === '/user/create' ? { pointerEvents: 'none', opacity: '0' } : {}
        }
        onClick={() => navigate('/user/create')}
        className="addUser"
      >
        Add new <i class="fa-solid fa-user-plus"></i>
      </button>
    </div>
  )
}
