import React from 'react';
import {View, Text,
  TouchableOpacity, ART
} from 'react-native';

const {Surface, Shape} = ART;

import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

import moment from 'moment';
import styles from '../../style/styleSheet';

export default class LineGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredData: null
    };
  }

  componentDidMount() {
    this.filterTodayData();
  }

  filterTodayData() {
    // Get current date, then calculate the range of data from 12AM to 11:59PM
    const today = moment();
    const start = moment([today.year(), today.month(), today.date()]).unix();  // 12AM
    const end = moment([today.year(), today.month(), today.date(), 23, 59]).unix(); // 11:59PM
    console.log(start, end);
    const filteredData = [];
    this.props.data.forEach(data => {
      if (data.time >= start && data.time <= end) {
        data.date = new Date(data.time);
        filteredData.push(data);
      }
    });
    this.setState({filteredData});
  }

  getLinePath() {
    const start = this.state.filteredData[0].date;
    const end = this.state.filteredData[this.state.filteredData.length -1].date;
    const scaleX = d3Scale.scaleTime()  // make scaleX a function to scale date data to range
      .domain([start, end])
      .range([0, 300]);
    const scaleY = d3Scale.scaleLinear() // make scaleX a function to scale data to range
      .domain([-2, 4])
      .range([-2, 4]);
    const line = d3Shape.line()
      .x(d => scaleX(d.date))
      .y(d => scaleY(d.emotion));
    return line(this.state.filteredData);
  }

  render() {
    console.log(this.state);
    if (!this.state.filteredData) return null;
    return (
      <Surface>
        <Shape
          d={this.getLinePath()}
          stroke="#000"
          strokeWidth={1}
        />
      </Surface>
    );
  }
}
