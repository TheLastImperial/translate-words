import { useEffect, useState } from 'react'
import './App.css'
import { ShowText } from './components/ShowText'
import { Message } from './components/Message';
import { selectOptions, selectWord } from './helpers/selectors';
import { Actions } from './components/Actions';

function App() {
  // const [words, setWords] = useState([]);
  // const [options, setOptions] = useState([]);
  // const options = ["Infinitive","Simple Past","Past Participle","Spanish"  ];
  // const words = [
  //   ["answer","answered","answered","responder"  ],
  //   ["add","added","added","agregar"  ],
  //   ["answer","answered","answered","responder"  ],
  //   ["apologise","apologised","apologised","disculparse"  ],
  //   ["arrest","arrested","arrested","arrestar"  ],
  //   ["arrive","arrived","arrived","llegar"  ],
  //   ["ask","asked","asked","preguntar"  ],
  // ]

  

  const [fromWord, setFromWord] = useState("");
  const [toWord, setToWord] = useState("");
  const [word, setWord] = useState("");
  const [translated, setTranslated] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [msg, setMsg] = useState("");
  const [tries, setTries] = useState(0);

  const setValues = () =>{
    const { from, to } = selectOptions(options);
    const { word, translated } = selectWord(words, options, from, to);
  
    setFromWord(from);
    setToWord(to);
    setWord(word);
    setTranslated(translated);
  }

  const validate = () =>{
    let t = translated.split("/")
    t = t.map( w => w.toLowerCase());
    setTries(tries + 1);

    if( t.includes( inputValue.toLowerCase() )){
      setMsg("Respuesta correcta");
      next();
    }else{
      setMsg("Respuesta incorrecta");
    }
  }
  const showAnswer = () => {
    setMsg(`La respuesta correcta es "${translated}"`);
  }

  const next = () => {
    setMsg("");
    setInputValue("");
    setValues();
    setTries(0);
  }
  useEffect(() => {
    // fetch('https://mocki.io/v1/e4ba2adc-3527-4566-8ac3-7bdfe24f5cf6')
    // .then(resp => resp.json())
    // .then(result => {
    //   console.log(result.options)
    //   setWords([...result.words]);
    //   setOptions([...result.options]);
    //   console.log(options)
    //   const { from, to } = selectOptions(result.options);
    //   setFromWord(from);
    //   setToWord(to);
    // });
    setValues();
  }, [ ]);
  
  return (
    <>
      <ShowText
        word = { word }
        from = { fromWord }
        to = { toWord }
      />
      <div>
        <input type="text" 
          value= { inputValue }
          onChange={ (e) => setInputValue(e.target.value) } />
      </div>
      <div className="card">
        <button type="submit" onClick={() => validate() }>
          Validar
        </button>
      </div>
      <Actions
        tries = { tries }
        showAfter={ 3 }
        next = { next }
        show = { showAnswer }
      />
      < Message
        msg = { msg }
      />
    </>
  )
}

export default App
