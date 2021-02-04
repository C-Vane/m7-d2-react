export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_JOB_TO_FAVORITES":
      return state.concat(action.payload);
    case "REMOVE_JOB_FROM_FAVORITES":
      return state.filter((job) => job.id !== action.payload);
    default:
      return state;
  }
}
