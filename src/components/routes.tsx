import { createBrowserRouter } from 'react-router-dom';
import Home from '../routes/Home';

export const routes = createBrowserRouter([{
    path: "/",
    element: <Home />
}]);

export default routes;