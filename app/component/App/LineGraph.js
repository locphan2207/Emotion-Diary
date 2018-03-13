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
    this.filterTodayData();
  }

  filterTodayData() {
    // Get current date, then calculate the range of data from 12AM to 11:59PM
    const today = moment();
    const start = moment([today.year(), today.month(), today.date()]).unix();  // 12AM
    const end = moment([today.year(), today.month(), today.date(), 23, 59]).unix(); // 11:59PM
    const filteredData = [];
    this.props.data.forEach(data => {
      if (data.time >= start && data.time <= end) {
        data.date = new Date(data.time);
        filteredData.push(data);
      }
    });
    this.setState({filteredData});
  }

  getCategories() {
    const categories = this.state.filteredData.map(data => `${data.date.toLocaleTimeString()}`);
    console.log(categories);
    return categories;
  }

  renderLine() {
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        height={400} width={400}
        padding={{left: 70, top: 60, right: 70, bottom: 60}}
        domainPadding={5}
        containerComponent={
          <VictoryVoronoiContainer
            labels={(d) => d.date.toLocaleTimeString()}
          />
        }
      >
        <VictoryLine
          color={d => d.emotion < 0 ? '#899D78' : '#55B295'}
          x='date' y='emotion'
          scale='time'
          data={this.state.filteredData}
          animate={{duration: 3000}}
        />

        <VictoryScatter
          color={d => d.emotion < 0 ? '#899D78' : '#55B295'}
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
    );
  }

  render() {
    console.log(this.state);
    if (this.state.filteredData.length < 1) return null;
    return (
      <View style={styles.graphContainer}>
        {this.renderLine()}
      </View>
    );
  }
}
