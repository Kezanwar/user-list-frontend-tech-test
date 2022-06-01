import { useEffect } from 'react'
import './App.scss'
// redux
import { Provider } from 'react-redux'
import store from './store'
import Alerts from './Components/Alert/Alerts'
import { getUsers } from './actions/users'
import { useLocation } from 'react-router-dom'
import UserListRoutes from './Components/Routes/Routes'
import HeaderNav from './Components/HeaderNav/HeaderNav'

function App() {
  const location = useLocation()

  useEffect(() => {
    store.dispatch(getUsers())
  }, [])

  return (
    <Provider store={store}>
      <div className="app">
        <HeaderNav />
        <UserListRoutes location={location} />
        <Alerts />
      </div>
    </Provider>
  )
}

export default App
