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
  render: function () {
    var colorOptions = this.color.map(function (color) {
      return (
        <option value={color} key={color}>{color}</option>
      );
    });
    var codeOptions = this.code.map(function (code) {
      return (
        <option value={code} key={code}>{code}</option>
      );
    });
    var typeOptions = this.btnType.map(function (type) {
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
