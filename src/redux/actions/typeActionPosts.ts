import {Post} from './interface';

export enum ActionTypesPosts {
  GET_ALL_POSTS = 'GET_ALL_POSTS',
}

export type Action2<T, P> = {type: T; payload: P};

export type DetPostsType = Action2<ActionTypesPosts.GET_ALL_POSTS, Post[]>;
export const getPosts = (payload: Post[]): DetPostsType => ({
  type: ActionTypesPosts.GET_ALL_POSTS,
  payload,
});
