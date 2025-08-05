import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
function Linkage() {
  const { user } = useAuth();
  if (!user) {
      return <Navigate to="/login" />;
  }
  return (
    <div>Linkage</div>
  )
}

export default Linkage