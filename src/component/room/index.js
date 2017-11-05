import React from 'react';
import * as actions from '../../actions/challengesActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Codemirror from 'react-codemirror';  
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/bespin.css';
import 'codemirror/theme/3024-day.css';
import 'codemirror/theme/3024-night.css';
import 'codemirror/theme/cobalt.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/isotope.css';
import 'codemirror/theme/duotone-light.css';
import 'codemirror/theme/icecoder.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/midnight.css';
import 'codemirror/theme/solarized.css';

import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/ruby/ruby.js'
import 'codemirror/mode/swift/swift.js'
import 'codemirror/mode/clojure/clojure.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/php/php.js'
import 'codemirror/mode/erlang/erlang.js'
import 'codemirror/mode/coffeescript/coffeescript.js'
import 'codemirror/mode/crystal/crystal.js'
class Room extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            code: ''
        }
    }

    componentDidMount() {
        this.props.challenge.id == undefined ? this.props.actions.getChallenges() : alert('else in room');
    }

    updateCodeInState(newText) {
        this.setState({code: newText});
    }

    render() {
        const options = {
            lineNumbers: true,
            mode: 'javascript',
            theme: 'monokai'
        }
        return (
            <div>
                <h1>{this.props.challenge.title}</h1>
                <p>{this.props.challenge.description}</p>
                <Codemirror
                    value={'hello world!'}
                    onChange={`coming soon`}
                    options={options} />
            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {  
    if (state.challenges.length > 0) {
      const challenge = state.challenges.filter(challenge => 
        {return challenge.id == ownProps.params.id})[0]
      return {challenge: challenge}
    } else {
      return {challenge: {title: '', description: ''}}
    }
  }
  
  function mapDispatchToProps(dispatch) {  
    return {actions: bindActionCreators(actions, dispatch)}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Room) 