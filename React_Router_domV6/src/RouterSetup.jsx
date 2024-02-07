import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, About, Contact, Error, Post } from "./pages";
import RootLayout from "./layout/RootLayout";
import PostInfo from "./component/PostInfo";

function RouterSetup() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Post/:id" element={<PostInfo />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default RouterSetup;
