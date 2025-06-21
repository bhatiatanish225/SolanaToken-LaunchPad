import { useState } from 'react'
import { TokenLaunchPad } from './components/TokenLaunchPad'
import AdapterFunc from './components/AdapterFunc'


function App() {
  

  return (
    <div>

   
        <AdapterFunc>
            <TokenLaunchPad />
        </AdapterFunc>

  
   </div>
    
  )
}

export default App
