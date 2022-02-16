import './App.css';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import store from './redux/Store';


function App() {
  return (
    <Provider store={store}>
      <Home />
      
    </Provider>
    
  );
}

export default App;
