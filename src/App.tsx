import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import post from './components/post';
import comments from './components/comment';

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='users' list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    <Resource name='posts' {...post} />
    <Resource name='comments' {...comments} />
  </Admin>
);
