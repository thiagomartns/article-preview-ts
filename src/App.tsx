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
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
