import { useAsync } from 'react-async-hook';
import './App.css'
import { Test } from './components/Test';

const fetchWords = async() => 
  (await fetch('/words.json')).json()

function App() {
  const { loading, result} = useAsync(fetchWords, [])
  return (
    <>
      {
        !loading && 
        <Test
          options = { result.options }
          words = { result.words }
        />
      }
    </>
  )
}

export default App
