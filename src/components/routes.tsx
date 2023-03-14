import { createBrowserRouter } from 'react-router-dom';
import Home from '../routes/Home';
import Add from '../routes/Add';

export const routes = createBrowserRouter([{
    path: "/",
    element: <Home />
}, {
    path: "/add",
    element: <Add />
}]);

export default routes;