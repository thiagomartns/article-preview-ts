import './App.scss';
import Drawers from './assets/img/drawers.jpg'
import { useState } from 'react';
import TextComponent from './components/textComponent/TextComponent';

function App() {
  const [showSocialMedia, setShowSocialMedia] = useState<boolean>(false);

  const handleClick = () => {
    setShowSocialMedia(!showSocialMedia);
  };

  return (
    <div className="App">
      <div className="app-content">
        <div className="app-content--img">
          <img src={Drawers} alt="" />
        </div>
        <TextComponent  
          showSocialMedia={showSocialMedia}
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}

export default App
