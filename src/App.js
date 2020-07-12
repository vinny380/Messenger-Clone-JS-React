import React, { useState, useEffect }from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';




function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([ ]);
  const [username, setUsername] = useState('');

  //useEffect = runs code on a condition
  //useState = a variable that live changes


  useEffect( () => { //listener --> It's gonna show my database, from firebase
    //run once when the component is done loading
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [] )



  useEffect(() => { 
    setUsername(prompt('Please enter your name')) //code
  }, [] ) //condition



  const sendMessage = (event) => { 
    //code to send the messages goes here
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  }
  

  return (
    <div className="App">
      <img class='logo' src='https://logodownload.org/wp-content/uploads/2017/04/facebook-messenger-logo-03.png' height='100' width='100' alt=''></img>
      <h1>Vinny's Messenger</h1>
      <h2>Welcome {username}</h2>

      <form className='app_form'> 
        <FormControl className='app_formControl'>
          <Input className='app_input' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className='app_iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
        </FormControl> 
      </form>



      <FlipMove>
        { messages.map(({id, message}) => (
            <Message key={id} username={username} message={message}/>
          ))
        }
      </FlipMove>
        
    </div>
  );
}

export default App;