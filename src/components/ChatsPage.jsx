import React from 'react'
// import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  // const chatProps =useMultiChatLogic(
  //   '252bcb00-3766-4d54-95ae-b9581791006a',
  //   props.user.username,
  //   props.user.secret
  //   );
    
  return (
    <div style={{height:'100vh'}}>
      {/* <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height:'100%'}} /> */}
      <PrettyChatWindow 
        projectId='252bcb00-3766-4d54-95ae-b9581791006a'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
       />
    </div>
  )
}

export default ChatsPage
