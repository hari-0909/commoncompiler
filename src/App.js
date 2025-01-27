import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import EditorPage from './pages/editorpage';
import { Toaster} from 'react-hot-toast';
function App() {
  return (
    <div className="App">
      <>
        <Toaster
          position="top-center"
          toastOptions={{
            success:{
              theme:{
                primary:'green',
                secondary:'black',
              }
            }
          }}
          ></Toaster>
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
