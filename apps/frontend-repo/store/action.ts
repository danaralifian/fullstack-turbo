import { Dispatch } from "redux";
import user from "../apis/user";
import ActionTypes from "../constants/action-types";
import IUser from "@repo/interfaces/models/user";
import { AppDispatch } from "./store";
import { FirebaseError } from "@firebase/app";
import { isErrorFirebaseError } from "../libs/utils";

const fetchUser = () => async (dispatch: AppDispatch) => {
  dispatch({ type: ActionTypes.User.USER_FETCH_REQUEST });
  try {
    const response = await user.fetchUser();
    const data = await response.json();
    if (isErrorFirebaseError(data))
      dispatch({
        type: ActionTypes.User.USER_FETCH_FAILURE,
        payload: { error: (data as FirebaseError).message },
      });
    else
      dispatch({
        type: ActionTypes.User.USER_FETCH_SUCCESS,
        payload: { data },
      });
  } catch (error) {
    dispatch({
      type: ActionTypes.User.USER_FETCH_FAILURE,
      payload: error,
    });
  }
};

const updateUser = (userData: IUser) => async (dispatch: AppDispatch) => {
  dispatch({ type: ActionTypes.User.USER_UPDATE_REQUEST });
  try {
    const response = await user.updateUser(userData);
    const data = await response.json();
    if (isErrorFirebaseError(data))
      dispatch({
        type: ActionTypes.User.USER_UPDATE_FAILURE,
        payload: { error: (data as FirebaseError).message },
      });
    else
      dispatch({
        type: ActionTypes.User.USER_UPDATE_SUCCESS,
        payload: { data: userData },
      });
  } catch (error) {
    dispatch({ type: ActionTypes.User.USER_UPDATE_FAILURE, payload: error });
  }
};

export { fetchUser, updateUser };
