import {Initial} from '../reducers/colors';
import {InitialPosts} from '../reducers/posts';

export interface RootState {
  color: Initial;
  posts: InitialPosts;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
