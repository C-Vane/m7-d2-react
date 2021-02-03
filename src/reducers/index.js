export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_JOB_TO_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };
    case "REMOVE_JOB_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((job) => job.id !== action.payload),
      };
    case "SET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    case "SET_CURRENT_JOB":
      return {
        ...state,
        currentJob: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: {
          status: action.payload.status,
          massage: action.payload.massage,
        },
      };
    default:
      return state;
  }
}
