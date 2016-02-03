import { connect } from 'react-redux'
import React, { Component } from 'react';
import request from 'superagent';
import * as actions from '../Actions';

class App extends Component {
  constructor(props) {
    super(props);

    console.log(props)
    this.state = {
      checkins: props.checkins || [],
    }
  }

  componentWillMount() {
    var self = this;
    if (this.state.checkins.length === 0) {
      request
        .get('http://whereiscolby.herokuapp.com/checkins')
        .end(function(err, res){
          self.props.dispatch(actions.addCheckins(res.body));
        });
    }
  }

  render() {
    return(
      <div>
      {this.props.checkins.map(function(checkin, key) {
        return <h1 key={key}>{checkin.venue.name}</h1>
      })}
      </div>
    );
  }
}


function select(state) {
  return {
    checkins: state.checkins
  }
}

export default connect(select)(App);
