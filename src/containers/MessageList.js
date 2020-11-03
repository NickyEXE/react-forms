import React from 'react'
import Message from '../components/Message'

class MessageList extends React.Component {

  render(){
    const arr = ["Starting a new movie where I kill a bunch of coding school students. Calling it Freddy vs. JSON",
  "Freddy curses too much for my taste - Michael Myers", "Bloooood"]
    return (
    <>
      <h3>Latest Messages:</h3>
      <ol>
        {arr.map((text, i) => <Message text={text} key={i} />)}
      </ol>
    </>
    )
  }

}


export default MessageList
