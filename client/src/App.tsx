
import AuthProvider from './contexts/auth'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './routes/router'


export function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}


