import { useState} from 'react';
import TextInput from "../components/TextInput";
import styles from "./Index.module.css";


export default function Index() {
const [text, setText] = useState('');
const [tweetList, setTweetList] = useState([])
const maxLength = 125;

function onTextChange(event) {
    const text = event.target.value;
    if (text.length <= maxLength) {
     setText(text);
   }
 }
  
  function sendTweet() {
    setTweetList([...tweetList, text]);
  }


  return (
   <div>
     <h1 className={styles.pageTitle}>TreinaTweet</h1>
      <div className={styles.tweetContainer}>
        <img 
        src={'https://github.com/leonardosantos10.png'}  
           className={styles.avatar}
        />
         <TextInput 
           placeholder={'o que está acontecendo?'}
           rows={3}
           maxLength={maxLength}
           value={text}
           onChange={onTextChange}
         />
      </div>
      <div className={styles.buttonContainer}>
         <div>{text.length} / {maxLength}</div>
         <button 
               onClick={sendTweet}
               className={styles.postButton}
               >
               Tweetar
         </button>
      </div>

      <ul>
         {tweetList.map(tweet  => {
           // eslint-disable-next-line react/jsx-key 
         return <li>{tweet}</li>  
      })}
      </ul>
   </div>
  )
}

