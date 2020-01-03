const Me = () => {
  return (
    <div className='me'>
      <p className='meText'>
        Hello, <br />
        I'm Bojo Zahariev,
        <br /> Front-end
        <br /> UI Developer
      </p>
    </div>
  );
};

const Back = props => {
  return <div onClick={props.onClick} className='backBtn'></div>;
};

const Frame0 = props => {
  if (props.frameStatus) {
    return (
      <div className={`frames ${props.frameStatus}`}>
        <p className={`framesText ${props.textStatus}`}>Projects</p>
        <div className='projectsDiv'>
          <div className='projects'>
            <div className='flip-projects-inner'>
              <div className='flip-projects-front' id='project1'></div>

              <div className='flip-projects-back'>
                <div>
                  <h1 className='flipTitle'>Angel shining</h1>
                  <p className='flipText'>Static website made for a small autocosmetics garage in Bulgaria</p>
                  <a href='https://angelskosiyanie.com' target='blank' className='links'>
                    <img src='images/live.png' alt='live' />
                    Live
                  </a>
                  <a href='https://github.com/BojoZahariev/AngelskoSiyanie' target='blank' className='links'>
                    <img src='images/github.png' alt='github' />
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='projects'>
            <div className='flip-projects-inner'>
              <div className='flip-projects-front' id='project2'></div>

              <div className='flip-projects-back'>
                <div>
                  <h1 className='flipTitle'>Chameleon</h1>
                  <p className='flipText'>Static website made for a small autocosmetics garage in Bulgaria</p>
                  <a href='#' className='links'>
                    <img src='images/live.png' alt='live' />
                    Live
                  </a>
                  <a href='#' className='links'>
                    <img src='images/github.png' alt='github' />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='projects'>1</div>
          <div className='projects'>1</div>
          <div className='projects'>1</div>
        </div>

        <Back onClick={props.onClick} />
      </div>
    );
  } else {
    return (
      <div
        className={`frames ${props.isHovered === 0 ? 'framesHovered0' : false}`}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}>
        <p className={`framesText ${props.textStatus}`}>Projects</p>
      </div>
    );
  }
};

const Frame1 = props => {
  if (props.frameStatus) {
    return (
      <div className={`frames ${props.frameStatus}`}>
        <p className={`framesText ${props.textStatus}`}>About me</p>

        <div className='projectsDiv'>
          <div className='projects'>1</div>
        </div>

        <Back onClick={props.onClick} />
      </div>
    );
  } else {
    return (
      <div
        className={`frames ${props.isHovered === 1 ? 'framesHovered1' : false}`}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}>
        <p className={`framesText ${props.textStatus}`}>About me</p>
      </div>
    );
  }
};

const Frame2 = props => {
  if (props.frameStatus) {
    return (
      <div className={`frames ${props.frameStatus}`}>
        <p className={`framesText ${props.textStatus}`}>Skills</p>

        <div className='projectsDiv'>
          <div className='projects'>1</div>
        </div>

        <Back onClick={props.onClick} />
      </div>
    );
  } else {
    return (
      <div
        className={`frames ${props.isHovered === 2 ? 'framesHovered2' : false}`}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}>
        <p className={`framesText ${props.textStatus}`}>Skills</p>
      </div>
    );
  }
};

const Frame3 = props => {
  if (props.frameStatus) {
    return (
      <div className={`frames ${props.frameStatus}`}>
        <p className={`framesText ${props.textStatus}`}>Contact</p>

        <div className='projectsDiv'>
          <div className='projects'>1</div>
        </div>

        <Back onClick={props.onClick} />
      </div>
    );
  } else {
    return (
      <div
        className={`frames ${props.isHovered === 3 ? 'framesHovered3' : false}`}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}>
        <p className={`framesText ${props.textStatus}`}>Contact</p>
      </div>
    );
  }
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      isHovered: false
    };

    this.clickControl = this.clickControl.bind(this);
    this.handleFramesHover = this.handleFramesHover.bind(this);
    this.handleFramesHoverLeave = this.handleFramesHoverLeave.bind(this);
  }

  clickControl(fr) {
    this.setState({
      clicked: fr,
      isHovered: false
    });
  }

  handleFramesHover(fr) {
    this.setState({
      isHovered: fr
    });
  }

  handleFramesHoverLeave() {
    this.setState({
      isHovered: false
    });
  }

  render() {
    if (!this.state.clicked) {
      return (
        <div className='main'>
          <Me />

          <Frame0
            onMouseEnter={() => this.handleFramesHover(0)}
            onMouseLeave={this.handleFramesHoverLeave}
            isHovered={this.state.isHovered}
            onClick={() => this.clickControl('framesClicked0')}
            textStatus={'framesTextUpLeft'}
          />
          <Frame1
            onMouseEnter={() => this.handleFramesHover(1)}
            onMouseLeave={this.handleFramesHoverLeave}
            isHovered={this.state.isHovered}
            onClick={() => this.clickControl('framesClicked1')}
            textStatus={'framesTextUpRight'}
          />
          <Frame2
            onMouseEnter={() => this.handleFramesHover(2)}
            onMouseLeave={this.handleFramesHoverLeave}
            isHovered={this.state.isHovered}
            onClick={() => this.clickControl('framesClicked2')}
            textStatus={'framesTextDownLeft'}
          />
          <Frame3
            onMouseEnter={() => this.handleFramesHover(3)}
            onMouseLeave={this.handleFramesHoverLeave}
            isHovered={this.state.isHovered}
            onClick={() => this.clickControl('framesClicked3')}
            textStatus={'framesTextDownRight'}
          />
        </div>
      );
    }

    if (this.state.clicked === 'framesClicked0') {
      return (
        <div className='main'>
          <Frame0 frameStatus={this.state.clicked} textStatus={'framesText0Move'} onClick={() => this.clickControl(false)} />
        </div>
      );
    }

    if (this.state.clicked === 'framesClicked1') {
      return (
        <div className='main'>
          <Frame1 frameStatus={this.state.clicked} textStatus={'framesText0Move'} onClick={() => this.clickControl(false)} />
        </div>
      );
    }

    if (this.state.clicked === 'framesClicked2') {
      return (
        <div className='main'>
          <Frame2 frameStatus={this.state.clicked} textStatus={'framesText1Move'} onClick={() => this.clickControl(false)} />
        </div>
      );
    }

    if (this.state.clicked === 'framesClicked3') {
      return (
        <div className='main'>
          <Frame3 frameStatus={this.state.clicked} textStatus={'framesText1Move'} onClick={() => this.clickControl(false)} />
        </div>
      );
    }
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
