import React from 'react';
import firebase from './firebase';
import Home from './Dashboard';
class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        
    }

    login =(e)=> {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => { }).catch((error) => {
            console.log(error);
        });
    }

     mychangehandle  =(e)=> {
        this.setState({[e.target.name]: e.target.value });
    }
    mysubmithandle =(e)=> {
        e.preventDefault()
        console.log(this.state);
        this.setState({email: '',password: ''});
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <form onSubmit={this.mysubmithandle}>

                        <h3 style={{textAlign:'ceter'}}>Sign In</h3>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    onChange={this. mychangehandle}
                                    value={this.state.email}
                                    type="email"
                                    name='email'
                                    className="form-control no-border"
                                    placeholder="Enter Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label style={{fontSize:'20px'}}>Password</label>
                                <input
                                    onChange={this. mychangehandle }
                                    value={this.state.password}
                                    type="password"
                                    name='password'
                                    className="form-control no-border"
                                    placeholder="Password"
                                    required
                                />


                            </div>
                            <div className="btn-toolbar">
                                
                                <button type="button" onClick={this.login} className="btn btn-primary col-sm-6">Submit</button>

                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;