import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    displayName: "",
    uid: "",
    accessToken: "", // 로그인 했는지 여부를 알려주는 토큰값
    photoURL: "",
    isLoading: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.displayName = action.payload.displayName;
      state.uid = action.payload.uid;
      state.accessToken = action.payload.accessToken;
      state.photoURL = action.payload.photoURL;
      state.isLoading = true;
    },
    clearUser: (state) => {
      state.displayName = "";
      state.uid = "";
      state.accessToken = "";
      state.isLoading = true;
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
