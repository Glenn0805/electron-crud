
import Cards from './components/card';
import { Button } from 'antd'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomeLayoutContainer from './components/home-layout/HomeLayoutContainer';
import ToggleThemeComponent from './components/ToggleThemeComponent';
import AppLayout from './components/home-layout/AppLayout';
function App() {
  return (
    <AppLayout />
  );
}

export default App;
