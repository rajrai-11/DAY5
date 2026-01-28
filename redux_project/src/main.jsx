import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import {store} from './store/store.js'
import {Provider} from 'react-redux';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
