const MePic = props => {
  return <img id='mePic' alt='me' src='images/me.jpg' />;
};

class Frame0 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      init: true
    };
  }

  render() {
    return (
      <div className='frames'>
        <p className={`framesText ${this.state.init && 'framesTextUpLeft'}`}>Projects</p>
      </div>
    );
  }
}

const Frame1 = props => {
  return <div className='frames'>About me</div>;
};

const Frame2 = props => {
  return <div className='frames'>CV</div>;
};

const Frame3 = props => {
  return <div className='frames'>Get in Touch</div>;
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //state
    };

    //bind
  }

  render() {
    return (
      <div className='main'>
        <Frame0 />
        <MePic />
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
