import React from 'react'
import Message from '../components/Message'

class MessageList extends React.Component {

  render(){
    return (
    <>
      <h3>Latest Messages:</h3>
      <ol>
        <Message text="Starting a new movie where I kill a bunch of coding school students. Calling it Freddy vs. JSON"/>
        <Message text="Freddy curses too much for my taste - Michael Myers"/>
        <Message text="Honestly I've found everyone's nightmares are bad enough without my help today. -FK"/>
      </ol>
    </>
    )
  }

}


export default MessageList
