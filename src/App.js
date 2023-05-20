import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Token from "./Components/Token";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

const theme = createTheme({
  typography: {
    fontFamily: "Lato, sans-serif",
    // other typography styles
  },
  // other theme properties
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };
  }

  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header data={this.state.resumeData.main} />
          <About data={this.state.resumeData.about} />
          {/* <About data={this.state.resumeData.about}/>s */}
          <Token data={this.state.resumeData.token} />
          <Portfolio data={this.state.resumeData.portfolio} />
          <Footer data={this.state.resumeData.main} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
