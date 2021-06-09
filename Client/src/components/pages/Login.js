import React, { Component } from "react";
import { AutoComplete } from "rsuite";
import "./Login.css";
import TextField from "@material-ui/core/TextField";

const data = ["@gmail.com", "@sina.com.cn", "@163.com", "@qq.com"];

class Login extends Component {
  state = {
    password: "",
    passwordLength: false,
    containsNumbers: false,
    isUpperCase: false,
    containsSymbols: false,
  };

  // check to see if there is any number
  checkForNumbers(string) {
    var matches = string.match(/\d+/g);
    this.setState({
      containsNumbers: matches != null ? true : false,
    });
  }

  // check for upper case
  checkForUpperCase(string) {
    var matches = string.match(/[A-Z]/);
    this.setState({
      isUpperCase: matches != null ? true : false,
    });
  }

  // check for symbols
  checkForSymbols(string) {
    var symbols = new RegExp(/[^A-Z a-z0-9]/);
    this.setState({
      containsSymbols: symbols.test(string) ? true : false,
    });
  }

  // handle password
  handleChange = (input) => (e) => {
    let targetValue = e.target.value.replace(/\s/g, "");
    this.checkForNumbers(targetValue);
    this.checkForUpperCase(targetValue);
    this.checkForSymbols(targetValue);
    this.setState({
      [input]: targetValue,
      passwordLength: targetValue.length > 7 ? true : false,
    });
  };

  // submit form
  submitForm = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.onhandleChange = this.onhandleChange.bind(this);
  }
  onhandleChange = (value) => {
    const at = value.match(/@[\S]*/);
    const nextData = at
      ? data
          .filter((item) => item.indexOf(at[0]) >= 0)
          .map((item) => {
            return `${value}${item.replace(at[0], "")}`;
          })
      : data.map((item) => `${value}${item}`);

    this.setState({
      data: nextData,
    });
  };
  render() {
    let {
      password,
      passwordLength,
      containsNumbers,
      isUpperCase,
      containsSymbols,
    } = this.state;
    let btnStatus =
      passwordLength && containsNumbers && isUpperCase && containsSymbols
        ? false
        : true;
    return (
      <div className="loginfront">
        <AutoComplete
          data={this.state.data}
          placeholder="Email"
          onChange={this.onhandleChange}
        />

        <div>
          <form>
              
             <TextField 
                      required
                     
                      onChange={this.handleChange("password")}
                      value={password}
                      placeholder="Enter Password"
                      variant="outlined"
                    />
                     <TextField 
                      required
                     
                      type="text"
                      onChange={this.handleChange("password")}
                      value={password}
                      placeholder="Confirm Password"
                      variant="outlined"
                    />
         
            <div>
              <div className={passwordLength ? "green" : "red"}>
                Contains More than 8 characters
              </div>
              <div className={containsNumbers ? "green" : null}>
                Contains numbers
              </div>
              <div className={isUpperCase ? "green" : null}>
                Contains UpperCase
              </div>
              <div className={containsSymbols ? "green" : null}>
                Contains Symbols
              </div>
            </div>
            <button
              className="Submit"
              disabled={btnStatus}
              onClick={this.submitForm}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
