import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import StripsContainer from './containers/StripsContainer';
import StripsInfoContainer from './containers/StripsInfoContainer';

class App extends Component {
  render () {
    return (
      <div style={{padding:'10px'}}>
          <Switch>
            <Route 
              path="/stripInfo/:id"
              exact
              render={(props) =>(
                <StripsInfoContainer id={props.match.params.id} {...props}></StripsInfoContainer>
              )}/>
            <Route path="/" exact component={StripsContainer} />
          </Switch>
      </div>
    );
  }
}

export default App;
