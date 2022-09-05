import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import SearchPage from "./pages/SearchPage";
function Router() {
    const element = useRoutes([
        {
            element: <HomePage />,
            path: '/'
        },
        {
            element: <CoursesPage />,
            path: 'courses'
        },
        {
            element: <SearchPage />,
            path: 'search'
        },
    ]);
    return element;
}

export default Router;