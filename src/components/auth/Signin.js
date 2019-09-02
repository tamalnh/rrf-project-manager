import React, { Component } from 'react';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
        console.log(this.state);
        
        return ( 
            <div className="container">
                <form className="white" onSubmit={e => this.handleSubmit(e)}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
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
 
export default Signin;