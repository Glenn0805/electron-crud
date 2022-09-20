
import Cards from './components/card';
import { Button } from 'antd'
import ToggleThemeComponent from './components/ToggleThemeComponent';
function App() {
  return (
    <>
      <ToggleThemeComponent />
      <div className='button-wrapper'>
        <Button type="primary">
          Add Project
        </Button>

      </div>

      <div className='card-wrapper'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div >


    </>
  );
}

export default App;
