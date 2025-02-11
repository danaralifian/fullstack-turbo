export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// Example of an async action using redux-thunk
export const fetchData = () => {
  return async (dispatch: any) => {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    // Dispatch an action with the fetched data
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
  };
};
