import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: any;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: {},
  isAuthenticated: false,
};

type LoginPayload = {
  user: any;
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<LoginPayload>) {
      return { ...state, user: action.payload.user, isAuthenticated: true };
    },
    logout() {
      return initialState;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
