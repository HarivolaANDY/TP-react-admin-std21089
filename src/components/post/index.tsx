import PostList from './PostList';
import PostEdit from './PostEdit';
import PostShow from './Post';

const post = {
  list: <PostList />,
  edit: <PostEdit />,
  show: <PostShow />,
  options: { label: 'Posts' },
};

export default post; 
