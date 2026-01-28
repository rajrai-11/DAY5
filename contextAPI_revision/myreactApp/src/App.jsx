import { useState } from 'react'
import { MycontextProvider } from './Context'
import MyComponent from './MyComponent'
function App() {
  return (
    <>
      <MycontextProvider>
        <MyComponent/>
      </MycontextProvider>
    </>
  )
}

export default App
