
import Cards from './components/card';
import { Button } from 'antd'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomeLayoutContainer from './components/home-layout/HomeLayoutContainer';
import ToggleThemeComponent from './components/ToggleThemeComponent';
function App() {
  return (
    <Routes>
      <Route path="/" name="Main" element={<HomeLayoutContainer />} />
    </Routes>
  );
}

export default App;
