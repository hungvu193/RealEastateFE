import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

// TODO: create a custom thunk to handle all the request

export interface UserType {
  cognito_user_id?: string;
  created_at?: string;
  date_of_birth?: string;
  email?: string;
  first_name?: string;
  id?: string;
  last_name?: string;
  updated_at?: string;
  parent_id?: string;
}

interface ParentType extends UserType {
  childs?: Array<UserType>;
}

interface HomeState {
  parent: ParentType;
  children: Array<UserType>;
  currentChild: UserType;
}

const initialState: HomeState = {
  parent: {},
  children: [],
  currentChild: {},
};

type ChildrenPayload = {
  children: Array<UserType>;
  parent: ParentType;
};

type CurrentChildPayload = {
  kid: UserType;
};

const homeSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    getChildSuccess(state, action: PayloadAction<ChildrenPayload>) {
      return {
        ...state,
        children: action.payload.children,
        parent: action.payload.parent,
      };
    },
    getChildFailed(state) {
      return { ...state, children: [] };
    },
    setCurrentChild(state, action: PayloadAction<CurrentChildPayload>) {
      return { ...state, currentChild: action.payload.kid };
    },
  },
});

// selector stuff
export const selectChildren = createSelector(
  (state: RootState) => state.homeReducer,
  (homeReducer: HomeState) => homeReducer.children,
);

export default homeSlice.reducer;
