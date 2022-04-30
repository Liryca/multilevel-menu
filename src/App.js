// import MultiMenu from "./Components/MultiMenu";
import { useState } from 'react';
import './App.css';
import List from './Components/List';
import HelpTOC from './HelpTOC';

function App() {
  const [activePage, setActivePage] = useState('');
  const [activeAnchor, setActiveAnchor] = useState('');

  return (
    <div className="App">
      <div className='nav'>
      <List
        ids={HelpTOC.topLevelIds}
        entities={HelpTOC.entities}
        activePage={activePage}
        setActivePage={setActivePage}
        activeAnchor ={activeAnchor}
        setActiveAnchor={setActiveAnchor}
      />
      </div>
     
    </div>
  );
}

export default App;
