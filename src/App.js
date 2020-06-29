import React, { Component } from 'react';
import firebase from './firebase';
import SignIn from './SignIn';
import Home from './Dashboard';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {user: {}};
    }

    componentDidMount() {
        this.myuser();
    }

    myuser() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
            else {
                this.setState({ user: null });
            }
        });
    }

    render() {
        return (

            <div className="App">
                {this.state.user ? (<Home />) : (<SignIn />)}
            </div>

        );
    }
}

export default App;