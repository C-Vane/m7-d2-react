export default function (state = {}, action) {
  switch (action.type) {
    case "SET_JOBS":
      return action.payload;
    default:
      return state;
  }
}
