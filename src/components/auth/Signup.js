import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            LastName: ''
          }
    }

    handleSubmit (e) {
        e.preventDefault();
    }

    handleInput(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {  
        
        return ( 
            <div className="container">
                <form className="white" onSubmit={e => this.handleSubmit(e)}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                         <label htmlFor="firstName">first Name</label>
                         <input 
                            type="text" 
                            id="firstName" 
                            name="firstName"  
                            value={this.state.firstName}
                            onChange={e => this.handleInput(e)}
                        />
                    </div>
                    <div className="input-field">
                         <label htmlFor="LastName">last Name</label>
                         <input 
                            type="text" 
                            id="LastName" 
                            name="LastName"  
                            value={this.state.LastName}
                            onChange={e => this.handleInput(e)}
                        />
                    </div>
                    <div className="input-field">
                         <label htmlFor="email">Email</label>
                         <input 
                            type="email" 
                            id="email" 
                            name="email"  
                            value={this.state.email}
                            onChange={e => this.handleInput(e)}
                        />
                    </div>
                    <div className="input-field">
                         <label htmlFor="password">Password</label>
                         <input 
                            type="password" 
                            id="password" 
                            name="password"  
                            value={this.state.password}
                            onChange={ e => this.handleInput(e)}
                        />
                    </div>
                    <div className="input-field">
                         <button className="btn pink lighten-1 z-depth-0">login</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Signup;