import React from 'react';
import {View, Text,
  TouchableOpacity
} from 'react-native';
import {VictoryChart,
  VictoryPie,
  VictoryLine,
  VictoryTooltip
} from 'victory-native';
import moment from 'moment';
import styles from '../../style/styleSheet';

export default class LineGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredColor: ['#899D78', '#A1B0AB', '#55B295', '#DB7F67', '#ED9B40',
        '#D34F73', '#BA3B46'],
      filteredData: []
    };
  }

  componentDidMount() {
    this.filterData();
  }

  filterData() {
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

  renderLine() {
    const data = this.state.filteredData;
    console.log(data);
    // Problem: x too big, have to make it like date
    return (
      <VictoryChart
        scale={{x: 'time'}}>
        <VictoryLine
          x='time' y='emotion'
          interpolation="linear"
          data={this.state.filteredData}
        />
      </VictoryChart>
    );
  }

  render() {
    return (
      <View style={styles.graphContainer}>
        {this.renderLine()}
      </View>
    );
  }
}
