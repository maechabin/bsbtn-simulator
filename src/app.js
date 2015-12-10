var React = require("react");
var ReactDOM = require("react-dom");

var SimApp = React.createClass({
  getInitialState: function () {
    return {
      value: 'class="btn btn-red50_ftg"'
    };
  },
  render: function () {
    return (
      <div>
        <SimSelect />
        <SimFigure />
        <SimDisplay data={this.state.value} />
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
  render: function () {
    return (
      <div style={this.style.div}>btn-
        <select style={this.style.select} className="color">
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
        <select style={this.style.select} className="code">
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
        <select style={this.style.select} className="btntype">
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
    return (
      <figure style={this.style.figure}>
        <button className="btn btn-red50_ftg ftg">button</button>
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
    var selectorName = this.props.data;
    return (
      <div style={this.style.div} className="display">{selectorName}</div>
    );
  }
});

ReactDOM.render(
  <SimApp />,
  document.getElementById("content")
);
