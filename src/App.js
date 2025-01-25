import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import EditorPage from './pages/editorpage';
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/editor/:roomId" element={<EditorPage />}></Route>
          </Routes>
        </BrowserRouter>    
      </>
    </div>
  );
}

export default App;
