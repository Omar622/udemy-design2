import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import SearchPage from "./pages/SearchPage";

const Router = [
    {
        element: <HomePage />,
        path: "/",
    },
    {
        element: <CoursesPage />,
        path: "courses",
    },
    {
        element: <SearchPage />,
        path: "search",
    },
];

export default Router;
