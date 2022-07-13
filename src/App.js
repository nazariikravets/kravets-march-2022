import {BrowserRouter} from "react-router-dom";
import {Link,Route,Routes} from "react-router-dom";


import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostPage from "./pages/PostPage";







function App() {
  return (
      <BrowserRouter>
        <div>
          <h2>Menu</h2>
          <ul>
            <li><Link to={'/'}>home</Link></li>
            <li><Link to={'/todos'}>todos</Link></li>
            <li><Link to={'/albums'}>albums</Link></li>
            <li><Link to={'/comments'}>comments</Link></li>
          </ul>
         <h2>Content</h2>
         <Routes>
           <Route path={'/'} element={<HomePage/>}/>
           <Route path={'/todos'} element={<TodosPage/>}/>
           <Route path={'/albums'} element={<AlbumsPage/>}/>
           <Route path={'/comments'} element={<CommentsPage/>}>
               <Route path={':id'} element={<PostPage/>}/>
           </Route>
         </Routes>





        </div>
      </BrowserRouter>

  );
}

export default App;
