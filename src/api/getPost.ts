import axios, {AxiosResponse} from 'axios';
import {Dispatch} from 'redux';
import {Post} from '../redux/actions/interface';
import {Action2, ActionTypesPosts} from '../redux/actions/typeActionPosts';
import {getPosts} from '../redux/actions/typeActionPosts';

const baseURL = 'https://jsonplaceholder.typicode.com';
export const axiosInstance = axios.create({
  baseURL,
});

export function getAllPosts() {
  return async (
    dispatch: Dispatch<Action2<ActionTypesPosts.GET_ALL_POSTS, Post[]>>,
  ) => {
    axiosInstance.get<never, AxiosResponse<Post[]>>('/posts').then(res => {
      dispatch(getPosts(res.data));
    });
  };
}

// export const getAllPosts = () => {
//   axiosInstance.get<never, AxiosResponse<Post[]>>('/posts').then(res => {
//     console.log(res, 'res');
//   });
// };
