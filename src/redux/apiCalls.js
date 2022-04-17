import { loginFailure, loginStart, loginSuccess } from './userSlice';
import axios from 'axios';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      'https://react-commerce-backend.herokuapp.com/api/auth/login',
      user
    );
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
