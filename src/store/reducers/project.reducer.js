const initialState = {
    projects: [
        {id: "1", title: "help me find peach", content: 'lorem ipsum dolor'},
        {id: "2", title: "collect all the start", content: 'lorem ipsum dolor'},
        {id: "3", title: "egg hunt with yoshi", content: 'lorem ipsum dolor'}
    ]
}

const ProjectReducer = ( state=initialState, action ) => {
    switch (action.type) { 
        default:
           return state;
    }
}

export default ProjectReducer;