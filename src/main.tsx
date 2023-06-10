import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { UIProvider } from './context/ui/UIProvider.tsx'
import { UserProvider } from './context/user/UserProvider.tsx'
import { CartProvider } from './context/cart/CartProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <UIProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UIProvider>
    </UserProvider>
  </React.StrictMode>,
)
