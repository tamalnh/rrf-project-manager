import React from 'react'

const ProjectDetails = (props) => {
    // const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title</span>
                    <p>lorem ipsum dolor</p>
                </div>

                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd septemver, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
