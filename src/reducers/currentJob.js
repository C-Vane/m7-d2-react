export default function (state = {}, action) {
  switch (action.type) {
    case "SET_CURRENT_JOB":
      return action.payload;
    default:
      return state;
  }
}
