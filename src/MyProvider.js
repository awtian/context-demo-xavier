import React, { Component, createContext } from 'react';

export const Context = createContext()

class MyProvider extends Component {
  state = {
    username: 'xavier',
    access: 'admin'
  }
  
  render() {
    return (
      <Context.Provider value={{
          state: this.state,
          changename: () => {
            this.setState({
              username: 'xavierfox'
            })
          }
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}


export default MyProvider;
