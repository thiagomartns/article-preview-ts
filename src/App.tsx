import './App.scss';
import { useState } from 'react';
import TextComponent from './components/textComponent/TextComponent';
import ImageComponent from './components/imageComponent/ImageComponent';

function App() {
  const [showSocialMedia, setShowSocialMedia] = useState<boolean>(false);

  const handleClick = () => {
    setShowSocialMedia(!showSocialMedia);
  };

  return (
    <div className="App">
      <div className="app-content">
        <ImageComponent />
        <TextComponent  
          showSocialMedia={showSocialMedia}
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}

export default App
