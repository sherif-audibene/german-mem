import "../App.css";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import B1 from "../B1.json";

class Words extends Component {
  constructor(props) {
    super(props);

    this.state = {
      germanWord: "",
      englishWord: "",
      wordCount: 1,
      article: "",
      plural: "",
      x: JSON.parse(JSON.stringify(B1)),
    };
  }

  previousWord = (e) => {
    e.preventDefault();

    console.log(this.state.x[this.state.wordCount]);

    this.setState({ wordCount: this.state.wordCount - 1 });
    this.setState({
      germanWord: this.state.x[this.state.wordCount]["Singular"],
    });
    this.setState({
      englishWord: this.state.x[this.state.wordCount]["English"],
    });
    this.setState({
      article: this.state.x[this.state.wordCount]["Article"],
    });

    this.setState({
      plural: this.state.x[this.state.wordCount]["Plural"],
    });

    return this.state.x[this.state.wordCount];
  };

  onFormSubmit() {
    console.log("Form Submitted");
  }

  nextWord = (e) => {
    e.preventDefault();

    this.setState({ wordCount: this.state.wordCount + 1 });
    this.setState({
      germanWord: this.state.x[this.state.wordCount]["Singular"],
    });
    this.setState({
      englishWord: this.state.x[this.state.wordCount]["English"],
    });
    this.setState({
      article: this.state.x[this.state.wordCount]["Article"],
    });

    this.setState({
      plural: this.state.x[this.state.wordCount]["Plural"],
    });

    console.log(this.state.x[this.state.wordCount]);
    return this.state.x[this.state.wordCount];
  };

  render() {
    return (
      <div className="Words">
        <header className="App-header">
          <h1 className="text-3xl font-bold underline border-b-green-800">
            Welcome to my App to memorize german words!
          </h1>

          <TextareaAutosize
            aria-label="German Word"
            value={this.state.germanWord}
            placeholder={this.state.germanWord}
            style={{ width: 500, height: 100, marginBottom: 20, fontSize: 30 }}
          />

          <TextareaAutosize
            aria-label="English Word"
            value={this.state.englishWord}
            placeholder={this.state.englishWord}
            style={{ width: 500, height: 100, marginTop: 20, fontSize: 30 }}
          />

          <Button
            variant="contained"
            onClick={this.previousWord}
            style={{
              width: 200,
              height: 100,
              marginLeft: -300,
              marginTop: 40,
              display: "inline-block",
            }}
          >
            Previous Word
          </Button>
          <Button
            variant="contained"
            onClick={this.nextWord}
            style={{
              width: 200,
              height: 100,
              marginLeft: 300,
              marginTop: -100,
              display: "inline-block",
            }}
          >
            Next Word
          </Button>
        </header>
      </div>
    );
  }
}
export default Words;
