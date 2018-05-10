
import { combineReducers } from 'redux';

import posts from './reducer_posts';
import comments from './reducer_comments';
import categories from './reducer_categories';

export default combineReducers({
  posts,
  comments,
  categories
});