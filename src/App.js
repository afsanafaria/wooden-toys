import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './pages/Explore/Products/Products';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound'
import Purchase from './pages/Purchase/Purchase';
import ExploreProducts from './pages/Explore/ExploreProducts/ExploreProducts';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './pages/shared/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/"> <Home></Home> </Route>
            <Route path="/home"> <Home></Home> </Route>
            {/* <PrivateRoute path="/myorders"> <MyOrders></MyOrders> </PrivateRoute> */}
            <Route path="/exploreproducts"> <ExploreProducts></ExploreProducts> </Route>
            {/* <PrivateRoute path="/pay"> <Pay></Pay> </PrivateRoute> */}
            <Route path="/products"> <Products></Products> </Route>
            <Route path="/register"> <Register></Register> </Route>
            <Route path="/login"> <Login></Login> </Route>
            <PrivateRoute path="/dashboard"> <Dashboard></Dashboard> </PrivateRoute>

            <PrivateRoute path="/purchase/:productId"> <Purchase></Purchase>  </PrivateRoute>
            {/* <PrivateRoute path="/review"> <Review></Review> </PrivateRoute> */}
            <Route > <NotFound></NotFound> </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
