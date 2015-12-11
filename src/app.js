var React = require("react");
var ReactDOM = require("react-dom");

var SimApp = React.createClass({
  getInitialState: function () {
    return {
      color: "red",
      code: "50",
      btnType: "_ftg"
    };
  },
  changeSelector: function (value) {
    this.setState({
      color: value.color,
      code: value.code,
      btnType: value.btnType
    });
  },
  render: function () {
    var ftg = (this.state.btnType === "_ftg") ? " ftg" : "";
    var selectorValue = "btn-" + this.state.color + this.state.code + this.state.btnType + ftg;
    var classValue = 'class="btn btn-' + this.state.color + this.state.code + this.state.btnType + '"';
    return (
      <div>
        <SimSelect onChangeSelector={this.changeSelector} />
        <SimFigure sValue={selectorValue} />
        <SimDisplay cValue={classValue} />
      </div>
    );
  }
});

var SimSelect = React.createClass({
  style: {
    div: {
      "margin": "16px",
      "textAlign": "center"
    },
    select: {
      "cursor": "pointer"
    }
  },
  send: function (e) {
    var value = {};
    value.color = this.refs.color.value;
    value.code = (value.color === "black" || value.color === "white") ? "" : this.refs.code.value;
    value.btnType = this.refs.btnType.value;
    this.props.onChangeSelector(value);
  },
  render: function () {
    return (
      <div style={this.style.div}>btn-
        <select style={this.style.select} className="color" onChange={this.send} ref="color">
          <option value="red">red</option>
          <option value="pink">pink</option>
          <option value="purple">purple</option>
          <option value="deeppurple">deeppurple</option>
          <option value="indigo">indigo</option>
          <option value="blue">blue</option>
          <option value="lightblue">lightblue</option>
          <option value="cyan">cyan</option>
          <option value="teal">teal</option>
          <option value="green">lightgreen</option>
          <option value="lime">lime</option>
          <option value="yellow">yellow</option>
          <option value="amber">amber</option>
          <option value="orange">orange</option>
          <option value="deeporange">deeporange</option>
          <option value="brown">brown</option>
          <option value="grey">grey</option>
          <option value="bluegrey">bluegrey</option>
          <option value="black">black</option>
          <option value="white">white</option>
        </select>
        <select style={this.style.select} className="code" onChange={this.send} ref="code">
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
          <option value="800">800</option>
          <option value="900">900</option>
        </select>
        <select style={this.style.select} className="btntype" onChange={this.send} ref="btnType">
          <option value="_ftg">_ftg</option>
          <option value="_rsd">_rsd</option>
          <option value="_flt">_flt</option>
          <option value=""></option>
        </select>
      </div>
    );
  }
});

var SimFigure = React.createClass({
  style: {
    figure: {
      "textAlign": "center",
      "margin": "16px"
    }
  },
  render: function () {
    var selectorValue = "btn " + this.props.sValue;
    return (
      <figure style={this.style.figure}>
        <button className={selectorValue}>button</button>
      </figure>
    );
  }
});

var SimDisplay = React.createClass({
  style: {
    div: {
      "fontSize": "18px",
      "fontWeight": "bold",
      "textAlign": "center"
    }
  },
  render: function () {
    var classValue = this.props.cValue;
    return (
      <div style={this.style.div} className="display">{classValue}</div>
    );
  }
});

ReactDOM.render(
  <SimApp />,
  document.getElementById("content")
);
