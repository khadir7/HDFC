import { get } from "axios";

export const fetchProjects = () => {
  return get(
    'http://starlord.hackerearth.com/kickstarter'
  );
};

export default {
    fetchProjects
};