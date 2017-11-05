import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as challengesAction from '../actions/challengesActions';
import ChallengesList from '../ChallengesList';


class Homepage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount () {
        this.props.children ? this.props.actions.getChallenges() : undefined;
    //     if(this.props.children.length === 0) {
    //         this.props.actions.getchallenges()
    //     }
    }

    render() {
        return (
            <div>
               <ChallengesList
                challenges={this.props.challenges} />
            </div>

        )
    }
}

let mapStateToProps = (state) => ({
    challenges: state.challenges,
});

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(Object.assign(userActions, challengesActions), dispatch)}
  }



export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

// let mapStateToProps = state => ({
//     children: state.children,
//     auth: state.auth,
//   });
  
//   let mapDispatchToProps = dispatch => ({
//     tokenSet: token => dispatch(tokenSet(token)),
//   });
  
//   export default connect(mapStateToProps, mapDispatchToProps)(App);

// this.props.auth ? <SettingsContainer/> : <Redirect to="/home"