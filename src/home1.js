import React, { Component } from 'react';
import firebase from './firebase';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: ''
        };
        this.logout = this.logout.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    logout(e) {
        e.preventDefault(); 
        firebase.auth().signOut().then((u) => { }).catch((error) => {
            console.log(error);
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        firebase.database().ref('/Data').push(this.state);
        alert("Data Saved");
        this.setState({
            fName: '',
            lName: ''
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <form onSubmit={this.handleSubmit}>
                            <h3>Dashboard</h3>

                            <div className="form-group">
                                <label>First Name</label>
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.fName}
                                    type="text"
                                    name='fName'
                                    className="form-control no-border"
                                    placeholder="Enter First Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.lName}
                                    type="text"
                                    name='lName'
                                    className="form-control no-border"
                                    placeholder="Enter Last Name"
                                    required
                                />
                            </div>
                            <div className="btn-toolbar">
                                <button type="button" onClick={this.handleSubmit} className="btn btn-success col-sm-6">Submit</button>

                                <button type="button" onClick={this.logout} className="btn btn-danger col-sm-6">Signout</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;