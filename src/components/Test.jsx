import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import { selectOptions, selectWord } from '../helpers/selectors';
import { ShowText } from './ShowText';
import { Actions } from './Actions';
import { Message } from './Message';

export const Test = ({ options, words }) => {
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
      setValues()
    }, []);
    
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

Test.propTypes = {
  options: PropTypes.array,
  words: PropTypes.array,
}
