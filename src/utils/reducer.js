export function reducer(state, action) {
  if (action.type === "add") {
    return {
      count: state.count + 1,
    };
  }
  throw Error("Unknown action.");
}

export const initState = { count: 1 };
