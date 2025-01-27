/* eslint-disable react/prop-types */

import styles from './TextInput.module.css';
import { useState} from 'react';



export default function TextInput({placeholder = 'o que está acontecendo?', maxLength, ...props}) {
 const [text, setText] = useState('');
 const [tweetList, setTweetList] = useState([])

 
  function onTextChange(event) {
     const text = event.target.value;
     if (text.length <= maxLength) {
      setText(text);
    }
  }

 function sendTweet(event) {
   setTweetList([...tweetList, text]);
 }

    return (
         <div>
            <textarea 
            className={styles.input}
            placeholder={placeholder} 
            maxLength={maxLength}  
            value={text}
            onChange={onTextChange}
            {...props}
            />
            <p>{text.length} / {maxLength}</p>
            <button onClick={sendTweet}>Enviar</button>
            {tweetList.map(tweet => {
               return (
                  <p>{tweet}</p>
               )
            })}
         </div>
    );
}

