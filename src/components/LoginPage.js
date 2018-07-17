import React from 'react';
import {startLogin} from '../actions/auth';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flag: 0,
            email: '',
            password: ''
        }
    }

    onEmailIdChange = (e) => {
        const val = e.target.value;
        this.setState(() => ({email: val}));
    }

    onPasswordChange = (e) => {
        const val = e.target.value;
        this.setState(() => ({password: val}));
    }

    onVerify = () => {
        this.props.startLogin(this.state.email, this.state.password);
    }
    render() {
        return (
            <div className="login-body flex-center">
                {
                    this.state.flag === 0 ?
                    (
                        <div className="flex-center flex-down login-body-2">
                            <div>Hey!! Are you Shubham ??</div>
                            <div  className="flex-center">
                                <button onClick={() => {this.setState(() => ({flag: 1}))}}>YES</button>
                                <button onClick={() => {
                                    console.log(this.props.history.location.pathname);
                                    this.props.history.push("/");
                                    }
                                }>NO</button>
                            </div>
                        </div>
                    ) : 
                    (
                        <div className="flex-center flex-down login-body-2">
                            <div>Prove Yourself</div>
                            <div className="flex-center flex-down">
                                <input onChange={this.onEmailIdChange} placeholder="Email ID" type="text" />
                                <input onChange={this.onPasswordChange} placeholder="Password" type="password"/>
                                <button onClick={this.onVerify}>Verify Me</button>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
    
}
const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return () => ({
        startLogin: (email, pass) => dispatch(startLogin(email, pass))
    });
}

const ConnectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default ConnectedLoginPage;