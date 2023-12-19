import Home from './home/Home'
import Issues from './issues/Issues'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { CssVarsProvider } from "@mui/joy";

function App() {
  return (
    <BrowserRouter>
      <CssVarsProvider defaultMode="system">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/issues' element={<Issues />}/>
        </Routes>
      </CssVarsProvider>
    </BrowserRouter>
  );
}

export default App;
