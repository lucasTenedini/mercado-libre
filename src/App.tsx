import './App.scss';
import { Provider } from 'react-redux';
import store from "./store";
import Router from './routes';
import "./styles.scss"

function App() {
  return (
    <Provider store={store}>
      <Router></Router>
    </Provider >
  );
}

export default App;