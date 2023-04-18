import './App.scss';
import Drawers from './assets/img/drawers.jpg'
import Avatar from './assets/img/avatar-michelle.jpg'
import ShareButton from './assets/img/icon-share.svg'

function App() {


  return (
    <div className="App">
      <div className="app-content">
        <div className="app-content--img">
          <img src={Drawers} alt="" />
        </div>
        <div className="app-content--info">
          <div className="info-text">
            <h1 className="info-h1">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
            <p className="info-p">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
          </div>
          <div className="info-profile">
            <div className="info-profile--user">
              <img className='info-profile--avatar' src={Avatar} alt="" />
              <div className="info-profile--username">
                <h2 className="username">Michelle Appleton</h2>
                <h3 className="date">28 jun 2020</h3>
              </div>
            </div>
            <div className="info-profile--share">
              <img className='image-share' src={ShareButton} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
