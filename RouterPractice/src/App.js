import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="help" element={<HelpLayout />}>
//         <Route path="faq" element={<Faq />} />
//         <Route path="contact" element={<Contact/>} />
//       </Route>
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/help",
        element: <HelpLayout />,
        children: [
          { index: true, element: <Faq /> },
          { path: "contact", element: <Contact /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: (
      <div style={{ marginTop: "100px" }}>
        <Link to="/">Back</Link> <h1>Not found</h1>
      </div>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
