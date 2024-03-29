import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import NewMessage from './containers/NewMessage/NewMessage';
import NotFound from './containers/NotFound/NotFound';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new-message" element={<NewMessage/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;