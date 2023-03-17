import {Post} from '../actions/interface';
import {ActionTypesPosts} from '../actions/typeActionPosts';

export type InitialPosts = {
  posts: Post[];
};
const user: InitialPosts = {
  posts: [],
};
export const statePostsReducer = (
  state = user,
  action: any,
): InitialPosts | undefined => {
  switch (action.type) {
    case ActionTypesPosts.GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
