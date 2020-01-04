const Me = () => {
  return (
    <div className='me'>
      <p className='meText'>
        Bojo Zahariev,
        <br /> Front-end
        <br /> Web Developer
        <br /> UX/UI Design
      </p>
    </div>
  );
};

const Orbit = () => {
  return (
    <div className='orbit'>
      <div className='orbit-ball'></div>
    </div>
  );
};

const Back = props => {
  return <div onClick={props.onClick} className='backBtn'></div>;
};

const Project = props => {
  return (
    <div className='projects'>
      <div className='flip-projects-inner'>
        <div className='flip-projects-front' id={props.id}></div>

        <div className='flip-projects-back'>
          <div>
            <h1 className='flipTitle'>{props.title}</h1>
            <p className='flipText'>{props.text}</p>
            <a href={props.live} target='blank' className='links'>
              <img src='images/live.png' alt='live' />
              Live
            </a>
            <a href={props.git} target='blank' className='links'>
              <img src='images/github.png' alt='github' />
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Frame0 = props => {
  if (props.frameStatus) {
    return (
      <div className={`frames ${props.frameStatus}`}>
        <p className={`framesText ${props.textStatus}`}>Projects</p>
        <div className='projectsDiv'>
          <Project
            id={'project1'}
            title={'Angel shining'}
            text={'Static website made for an autocosmetics garage in Bulgaria, hence the strange language.'}
            live={'https://angelskosiyanie.com'}
            git={'https://github.com/BojoZahariev/AngelskoSiyanie'}
          />

          <Project
            id={'project2'}
            title={'Chameleon'}
            text={'REACT game, designed to help people learn RGB and HEX colour formats.'}
            live={'https://bojozahariev.github.io/Chameleon/'}
            git={'https://github.com/BojoZahariev/Chameleon'}
          />

          <Project
            id={'project3'}
            title={'Weather App'}
            text={'Local weather App, made using the Openweathermap API.'}
            live={'https://bojozahariev.github.io/Weather-App/'}
            git={'https://github.com/BojoZahariev/Weather-App'}
          />

          <Project
            id={'project4'}
            title={'Vodolaza'}
            text={'REACT small restaurant page, made for fun. Real place though, one of my favorite.'}
            live={'https://bojozahariev.github.io/Restaurant_react/'}
            git={'https://github.com/BojoZahariev/Restaurant_react'}
          />

          <Project
            id={'project5'}
            title={'My Lotto Numbers'}
            text={'Lucky Lotto Numbers generator using name and DOB as seed.'}
            live={'https://bojozahariev.github.io/Lotto_Numbers/'}
            git={'https://github.com/BojoZahariev/Lotto_Numbers'}
          />

          <Project
            id={'project6'}
            title={'Calculator'}
            text={'JavaScript Steampunk calculator, one of my early projects.'}
            live={'https://bojozahariev.github.io/Calculator/'}
            git={'https://github.com/BojoZahariev/Calculator'}
          />

          <Project
            id={'project7'}
            title={'The Next Web'}
            text={'The Next Web landing page mockup.'}
            live={'https://bojozahariev.github.io/TheNextWeb-homepage/'}
            git={'https://github.com/BojoZahariev/TheNextWeb-homepage'}
          />

          <Project
            id={'project8'}
            title={'Tic Tac Toe'}
            text={'JavaScript Tic Tac Toe game.'}
            live={'https://bojozahariev.github.io/TicTacToe/'}
            git={'https://github.com/BojoZahariev/TicTacToe'}
          />

          <Project
            id={'project9'}
            title={'My Library'}
            text={'Personal Library with Internal Storage'}
            live={'https://bojozahariev.github.io/My_Library/'}
            git={'https://github.com/BojoZahariev/My_Library'}
          />

          <Project
            id={'project10'}
            title={'The New York Times article'}
            text={'The New York Times article mockup.'}
            live={'https://bojozahariev.github.io/NY_Times_article/'}
            git={'https://github.com/BojoZahariev/NY_Times_article'}
          />

          <Project
            id={'project11'}
            title={'Sketch'}
            text={'Drawing App.'}
            live={'https://bojozahariev.github.io/Sketch/'}
            git={'https://github.com/BojoZahariev/Sketch'}
          />

          <Project
            id={'project12'}
            title={'To Do List'}
            text={'To Do list using Internal Storage.'}
            live={'https://bojozahariev.github.io/ToDo/'}
            git={'https://github.com/BojoZahariev/ToDo'}
          />

          <Project
            id={'project13'}
            title={'Newsweek'}
            text={'Newsweek landing page mockup, done with Bootstrap.'}
            live={'https://bojozahariev.github.io/NewsWeek/'}
            git={'https://github.com/BojoZahariev/NewsWeek'}
          />

          <Project
            id={'project14'}
            title={'YouTube'}
            text={'YouTube single page mockup.'}
            live={'https://bojozahariev.github.io/youtube_video/'}
            git={'https://github.com/BojoZahariev/youtube_video'}
          />

          <Project
            id={'project15'}
            title={'Rock Paper Scissors'}
            text={'JavaScript Rock Paper Scissors game.'}
            live={'https://bojozahariev.github.io/Rock_paper_scissors/'}
            git={'https://github.com/BojoZahariev/Rock_paper_scissors'}
          />

          <Project
            id={'project16'}
            title={'Pomodoro Timer'}
            text={'JavaScript Code / Rest technique timer.'}
            live={'https://bojozahariev.github.io/Pomodoro-timer/'}
            git={'https://github.com/BojoZahariev/Pomodoro-timer'}
          />
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

        <div className='projectsDiv'></div>

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

        <div className='projectsDiv'></div>

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

        <div className='projectsDiv'></div>

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
          <Orbit />

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
