import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/Homepage';
import MoreDetail from './pages/MoreDetail';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Route path="/moredetail">
        <MoreDetail />
      </Route>
    </div>
  );
}

export default App;
