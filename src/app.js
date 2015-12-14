import React from "react";
import ReactDOM from "react-dom";

const SimApp = React.createClass({
  getInitialState() {
    return {
      color: "red",
      code: "50",
      btnType: "_ftg"
    };
  },
  changeSelector(value) {
    this.setState({
      color: value.color,
      code: value.code,
      btnType: value.btnType
    });
  },
  render() {
    let ftg = (this.state.btnType === "_ftg") ? " ftg" : "";
    let selectorValue = "btn-" + this.state.color + this.state.code + this.state.btnType + ftg;
    let classValue = 'class="btn btn-' + this.state.color + this.state.code + this.state.btnType + '"';
    return (
      <div>
        <SimSelect onChangeSelector={this.changeSelector} />
        <SimFigure sValue={selectorValue} />
        <SimDisplay cValue={classValue} />
      </div>
    );
  }
});

const SimSelect = React.createClass({
  propTypes: {
    onChangeSelector: React.PropTypes.func.isRequired
  },
  getDefaultProps() {
    return {
      color: [
        "red", "pink", "purple", "deeppurple", "indigo", "blue", "lightblue", "cyan", "teal", "green",
        "lime", "yellow", "amber", "orange", "deeporange", "brown", "grey", "bluegrey", "black", "white"
      ],
      code: [
        "50", "100", "200", "300", "400", "500", "600", "700", "800", "900"
      ],
      btnType: [
        "_ftg", "_rsd", "_flt", ""
      ],
    };
  },
  style: {
    div: {
      "margin": "16px",
      "textAlign": "center"
    },
    select: {
      "cursor": "pointer"
    }
  },
  send(e) {
    let value = {};
    value.color = this.refs.color.value;
    value.code = (value.color === "black" || value.color === "white") ? "" : this.refs.code.value;
    value.btnType = this.refs.btnType.value;
    this.props.onChangeSelector(value);
  },
  render() {
    let colorOptions = this.props.color.map((color) => {
      return (
        <option value={color} key={color}>{color}</option>
      );
    });
    let codeOptions = this.props.code.map((code) => {
      return (
        <option value={code} key={code}>{code}</option>
      );
    });
    let typeOptions = this.props.btnType.map((type) => {
      return (
        <option value={type} key={type}>{type}</option>
      );
    });
    return (
      <div style={this.style.div}>btn-
        <select style={this.style.select} className="color" onChange={this.send} ref="color">
          {colorOptions}
        </select>
        <select style={this.style.select} className="code" onChange={this.send} ref="code">
          {codeOptions}
        </select>
        <select style={this.style.select} className="btntype" onChange={this.send} ref="btnType">
          {typeOptions}
        </select>
      </div>
    );
  }
});

const SimFigure = React.createClass({
  propTypes: {
    sValue: React.PropTypes.string.isRequired
  },
  style: {
    figure: {
      "textAlign": "center",
      "margin": "16px"
    }
  },
  render() {
    let selectorValue = "btn " + this.props.sValue;
    return (
      <figure style={this.style.figure}>
        <button className={selectorValue}>button</button>
      </figure>
    );
  }
});

const SimDisplay = React.createClass({
  propTypes: {
    cValue: React.PropTypes.string.isRequired
  },
  style: {
    div: {
      "fontSize": "18px",
      "fontWeight": "bold",
      "textAlign": "center"
    }
  },
  render() {
    let classValue = this.props.cValue;
    return (
      <div style={this.style.div} className="display">{classValue}</div>
    );
  }
});

ReactDOM.render(
  <SimApp />,
  document.getElementById("content")
);
