import React from "react";
import ReactCardFlip from "react-card-flip";
import bg1 from "../../img/bg1.jpg";
class StartUp extends Components() {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return (
      <div className="loginbg">
        <img src={bg1} alt="startup" />
        <div class="login-text-block">welcome</div>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="vertical"
        >
          <YOUR_FRONT_CCOMPONENT>
            This is the front of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </YOUR_FRONT_CCOMPONENT>

          <YOUR_BACK_COMPONENT>
            This is the back of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </YOUR_BACK_COMPONENT>
        </ReactCardFlip>
      </div>
    );
  }
}

export default StartUp;
