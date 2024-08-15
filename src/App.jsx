import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/Button'
function App() {
  const [count, setCount] = useState(0);
  const handleIncrement  
  = () => {
     setCount(count + 1);
   };
 
   const handleDecrement = () => {
     setCount(count - 1);
   };
  return (
    <>
    {count}
      <div className='card'>
        <Button
        onClick={handleIncrement}
          label={'Add_1'}
          borderColor={"border-blue-400"}
        />
        <Button
          label={'Add_2'}
          bgColor={'bg-pink-300'}
        /> <Button
          label={'Add_3'}
          txColor={'text-red-600'}
        /> <Button
          label={'Add_4'}
        />
      </div>

      <div className='card'>
        <Button
          label={'sub_1'}
        />
        <Button
          label={'sub_2'}
        /> <Button
          label={'sub_3'}
        /> <Button
          label={'sub_4'}
        />
      </div>
    </>
  )
}

export default App
