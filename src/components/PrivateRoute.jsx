import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ authenticate, children }) => {
  return authenticate ? children : <Navigate to="/login" replace />
}

export default PrivateRoute
