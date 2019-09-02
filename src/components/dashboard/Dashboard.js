import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Notifications } from './'
import { ProjectList } from '../projects'



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { projects } = this.props;
        // console.log(this.props)
        return ( 
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"> 
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1"> 
                        <Notifications />
                    </div>
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return{
        projects: state.project.projects
    }
}
 
export default connect(mapStateToProps)(Dashboard);