import React from "react";
import $ from "jquery";
import { async } from "q";
import Light from "./components/Light";
import LightFnc from "./components/LightFnc";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      toggleOne: false
    };
  }
  componentDidMount() {
    $(".light").click(function() {
      if ($(".light").text() == "LIGHT CLOSE") {
        $(".back").css({
          backgroundColor: "#FFFFFF",
          color: "red"
        });
        $(this).text("LIGHT open");
      } else {
        $(this).text("LIGHT CLOSE");
        $(".back").css({
          backgroundColor: "blue",
          color: "red"
        });
      }
    });
  }
  handleClick = async () => {
    await this.setState({
      toggle: !this.state.toggle
    });
    console.log("before" + this.state.toggle);
  };
  handleClick1 = () => {
    this.setState({
      toggleOne: !this.state.toggleOne
    });
  };

  render() {
    const black = {
      backgroundColor: "#000",
      width: "600px",
      height: "560px"
    };
    const red = {
      backgroundColor: "red",
      width: "600px",
      height: "560px"
    };
    return (
      <>
        <div onClick={this.handleClick}>
          {this.state.toggle ? "開燈" : "關燈"}
        </div>
        {this.state.toggle ? (
          <div style={black}>ewew</div>
        ) : (
          <div style={red}>ewegggw</div>
        )}

        <div
          className="back"
          style={{
            width: "600px",
            height: "600px",
            backgroundColor: "#000000",
            color: "red"
          }}
        >
          <div className="light">LIGHT CLOSE</div>
          <Light />
          <Light
            color="pink"
            status={this.state.toggleOne}
            onClick={this.handleClick1}
          />
          <LightFnc color="blue" />
          <LightFnc />
          <LightFnc color="yellow" />
        </div>
      </>
    );
  }
}

export default App;
