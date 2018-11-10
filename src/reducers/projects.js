const projects = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_PROJECTS_SUCCESS':
        return Object.assign({}, state, {
            projectData: action.projectData
        })
      default:
        return state
    }
}

export default projects