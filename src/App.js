import { Counter } from './features/counter/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'

function App() {
  return (
    <>
      <Counter />
      <hr />
      <AddPostForm />
      <PostsList />
    </>
  );
}
export default App;
