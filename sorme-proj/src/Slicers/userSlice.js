import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  username: "",
  fullname: "",
  birth: "",
  token: "",
  email: "",
  position: "",
  address: "",
  _id: "",
  avatar: [],
  support: [],
  data: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updateFullname(state, action) {
      state.fullname = action.payload;
    },
    updateToken(state, action) {
      state.token = action.payload;
    },
    updateBirth(state, action) {
      state.birth = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
    updateSupport(state, action) {
      state.support = action.payload;
    },
    updatePosition(state, action) {
      state.position = action.payload;
    },
    updateId(state, action) {
      state._id = action.payload;
    },
    updateData(state, action) {
      state.data = action.payload;
    },
    updateAvatar(state, action) {
      state.avatar = action.payload;
    },
    updateAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const {
  updateName,
  updateAvatar,
  updateToken,
  updateSupport,
  updateEmail,
  updatePosition,
  updateId,
  updateBirth,
  updateData,
  updateAddress,
  updateFullname,
  
} = userSlice.actions;
export const useUser = () => useSelector((state) => state.user);

export default userSlice.reducer;
