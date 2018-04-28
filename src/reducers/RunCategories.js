export function RunCategories(state=[], action) {
  switch (action.type) {
    case "ADD_CATEGORY_DATA":
     return action.payload
    default:
      return state;
  }
}
