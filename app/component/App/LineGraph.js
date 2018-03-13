import React from 'react';
import {View, Text,
  TouchableOpacity
} from 'react-native';
import {
  VictoryChart, VictoryLine, VictoryVoronoiContainer, VictoryAxis,
  VictoryTheme, VictoryGroup, VictoryScatter
} from 'victory-native';

import moment from 'moment';
import styles from '../../style/styleSheet';

export default class LineGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredData: [],
      scrollEnabled: true
    };
  }

  componentDidMount() {
    this.filterTodayData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.filterTodayData(nextProps);
  }

  filterTodayData(props) {
    // Get current date, then calculate the range of data from 12AM to 11:59PM
    const today = moment();
    const start = moment([today.year(), today.month(), today.date()]).unix();  // 12AM
    const end = moment([today.year(), today.month(), today.date(), 23, 59]).unix(); // 11:59PM
    const filteredData = [];
    props.data.forEach(data => {
      if (data.time >= start && data.time <= end) {
        data.date = new Date(data.time);
        filteredData.push(data);
      }
    });
    this.setState({filteredData});
  }

  renderLine() {
    console.log(this.state.filteredData);
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        height={400} width={400}
        padding={{left: 100, top: 60, right: 70, bottom: 60}}
        domainPadding={5}
        containerComponent={
          <VictoryVoronoiContainer
          labels={(d) => `${d.date.toLocaleTimeString()} ${d.text}`}
          />
        }
      >
        <VictoryLine
          style={{data: {stroke: '#B33F62'}}}
          x='date' y='emotion'
          scale='time'
          data={this.state.filteredData}
          animate={{duration: 3000}}
        />
        <VictoryChart
        >
          <VictoryScatter
            style={{data: {stroke: '#55B295'}}}
            x='date' y='emotion'
            scale='time'
            data={this.state.filteredData}
            animate={{duration: 3000}}
          />
          <VictoryAxis style={{ axis: {strokeWidth: 1} }}
          tickFormat={() => ''}
          />
          <VictoryAxis
          dependentAxis
          tickValues={[-2, -1, 0, 1, 2, 3, 4]}
          tickFormat={['Depressed', 'Sad', 'Meh', 'Happy', 'Delighted', 'Blissful', 'Loved']}
          />
        </VictoryChart>
      </VictoryChart>
    );
  }

  render() {
    if (this.state.filteredData.length < 1) return null;
    return (
      <View style={styles.graphContainer}>
        {this.renderLine()}
      </View>
    );
  }
}
