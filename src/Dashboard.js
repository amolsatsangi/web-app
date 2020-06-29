import React, { Component } from 'react';
import firebase from './firebase';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: ''
        };
        
}
    logout =(e) =>{
        e.preventDefault(); 
        firebase.auth().signOut().then((u) => { }).catch((error) => {
            console.log(error);
        });
    }

    mychangehandle =(e) => {
        this.setState({
            [e.target.name]: e.target.value});
    }

    mysubmithandle =(e) => {
        e.preventDefault()
        firebase.database().ref('/Data').push(this.state);
        alert("Data Saved");
        this.setState({
            name: '',
            city: ''
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 ">
                        <form onSubmit={this.mysubmithandle}>
                            <h3 style={{textAlign:'center'}}>Dashboard</h3>

                            <div className="form-group">
                                <label style={{fontSize:'20px'}}> Name</label>
                                <input
                                    onChange={this.mychangehandle}
                                    value={this.state.name}
                                    type="text"
                                    name='name'
                                    className="form-control no-border"
                                    placeholder="Enter your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label style={{fontSize:'20px'}}>City</label>
                                <input
                                    onChange={this.mychangehandle}
                                    value={this.state.city}
                                    type="text"
                                    name='city'
                                    className="form-control no-border"
                                    placeholder="Enter your city"
                                    required
                                />
                            </div>
                            <div className="btn-toolbar">
                                <button type="button" onClick={this.mysubmithandle} className="btn btn-success col-sm-6" style={{margin:'100px'}}>Submit</button>

                                <button type="button" onClick={this.logout} className="btn btn-danger col-sm-6" style={{float:'right',margin:'100px'}}>Signout</button>



                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;

