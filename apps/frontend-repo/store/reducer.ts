import { combineReducers } from "@reduxjs/toolkit";
import { Action, Reducer } from "redux";
import IUserState from "@repo/interfaces/states/user";
import ActionTypes from "../constants/action-types";
import IUser from "@repo/interfaces/models/user";

const BaseStateDefault = {
  loading: false,
  list: [],
  data: {} as IUser,
};

const initialState: IUserState = {
  ...BaseStateDefault,
} as IUserState;

const userReducer: Reducer<IUserState> = (
  state: IUserState = initialState,
  action: any
): IUserState => {
  switch (action.type) {
    case ActionTypes.User.USER_FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case ActionTypes.User.USER_FETCH_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        loading: false,
        list: data,
      };
    }
    case ActionTypes.User.USER_FETCH_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    default: {
      return state;
    }
  }
};

export interface ReduxState {
  user: Reducer<IUserState>;
}

const rootReducer = combineReducers<ReduxState>({
  user: userReducer,
});

export default rootReducer;
