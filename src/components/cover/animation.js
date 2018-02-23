import React from "react";
import style from "./style.module.scss";
import { Stage, Layer, Rect, Circle } from "react-konva";


class Animation extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.refs.stage.getStage());
    this.tween(this.refs.circle);
  }
  createCircle() {
    return (<Circle
      x={this.props.width / 2}
      y={this.props.height / 2}
      radius='30'
      fill="green"
    />)
  }
  generateCircles() {
    setInterval()
  }
  tween(circle) {
    circle.to({
      x: '0',
      y: '0',
      duration: 2
    })
  }

  render() {
    return (
      <Stage
        width={this.props.width}
        height={this.props.height}
        ref='stage'
        style={{
          position: 'absolute',
          top: '0',
          left: '0'
        }}>
        <Layer ref='layer'>
          {/* {setInterval(() => (), 2000)} */}
        </Layer>
      </Stage>
    )
  }
}

export default Animation;
