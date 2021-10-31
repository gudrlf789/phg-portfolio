import "./intro.css"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Hyeong Gil Park</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">REACT</div>
              <div className="i-title-item">JAVA</div>
              <div className="i-title-item">JAVA SCRIPT</div>
              <div className="i-title-item">NODEJS</div>
            </div>
          </div>
          <div className="i-desc">
            Welcome to phg-protfolio!!
          </div>
        </div>
      </div>
      <div className="i-right">right</div>
    </div>
  )
}

export default Intro
