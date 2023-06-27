import './style.scss'
import Waves from '../../assets/images/wave.svg'
export function Home() {

  return (
    <div className="home-container">
      <div className="welcome-container">
        <img className="waves" src={Waves} alt="" />
        <div className="welcome-content">
        <b>Welcome!</b>
        <p>
          You are on as <strong>Manager role</strong>
        </p>
        </div>
      </div>
    </div>
  )
}