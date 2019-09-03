import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/project.action'

class CreateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
             title: '',
             content: '',
             date: new Date()
          }
    }

    handleSubmit (e) {
        e.preventDefault();

        const newProject = {
            title: this.state.title,
            content: this.state.content,
            createdAt: this.state.date
        }

        this.props.createProject(newProject); //create project
    }

    handleInput(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {  
        // console.log(this.props)
        // console.log(this.state)
        return ( 
            <div className="container">
                <form className="white" onSubmit={e => this.handleSubmit(e)}>
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                         <label htmlFor="title">Title</label>
                         <input 
                            type="text" 
                            id="title" 
                            name="title"  
                            value={this.state.title}
                            onChange={e => this.handleInput(e)}
                        />
                    </div>
                    <div className="input-field">
                         <label htmlFor="text">Description</label>
                         <textarea   
                            id="text" 
                            name="content"
                            col="10"   
                            className="materialize-textarea"
                            value={this.state.content}
                            onChange={e => this.handleInput(e)}
                        ></textarea>
                    </div>
                      
                    <div className="input-field">
                         <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.project.projects
    }
}

 
export default connect(mapStateToProps, {createProject})(CreateProject);