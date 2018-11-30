import React, {Fragment} from 'react';
import {Context} from '../MyProvider'

const User = (props) => {
  return (
    <Context.Consumer>
      {(context) => 
      <Fragment>
        <p>Username: {context.state.username}</p>
        <p>Access: {context.state.access}</p>
        <button onClick={()=>{context.changename()}}> fox!</button>
      </Fragment>
      }
    </Context.Consumer>
  );
}

export default User;
