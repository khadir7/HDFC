import {projectService} from "../services";

export const fetchProjects = dispatch => {
    return projectService
        .fetchProjects()
        .then(res =>
          dispatch({
            type: "FETCH_PROJECTS_SUCCESS",
            projectData: res.data
          })
        )
      .catch(() =>
        {

        }
      );
  };
