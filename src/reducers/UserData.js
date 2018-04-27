export function UserData(state=[], action) {
  switch (action.type) {
    case "ADD_Data":
     return [action.payload]
    default:
      return state;
  }
}
