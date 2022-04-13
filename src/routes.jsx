import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { Redirect } from "react-router-dom";

function ProtectedRoute(props) {
  return (
    <Route
      render={() =>
        props.estaLogado ? props.children : <Redirect to="/login" />
      }
    />
  );
}

function RoutesApp() {
  const estaLogado = true;
  return (
    <div className="App">
      <Router>
        <Switch>
          <UserProvider>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute estaLogado={estaLogado}>
              <Route path="/dashboard" component={Dashboard} />
            </ProtectedRoute>
          </UserProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default RoutesApp;
