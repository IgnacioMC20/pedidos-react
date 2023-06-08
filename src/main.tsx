import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { UIProvider } from './context/ui/UIProvider.tsx'
import { UserProvider } from './context/user/UserProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <UIProvider>
        <App />
      </UIProvider>
    </UserProvider>
  </React.StrictMode>,
)
