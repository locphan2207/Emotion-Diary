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

export default class PieGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredColor: ['#899D78', '#A1B0AB', '#55B295', '#DB7F67', '#ED9B40',
        '#D34F73', '#BA3B46'],
      filteredData: [ //initial state of pie chart
        {x: 'Depressed', y: 1},
        {x: 'Sad', y: 1},
        {x: 'Meh', y: 1},
        {x: 'Happy', y: 1},
        {x: 'Joyjul', y: 1},
        {x: 'Delighted', y: 1},
        {x: 'Loved', y: 1},
      ]
    };
  }

  renderLine() {
    const data = this.props.data;
    let min = 0;
    let max = 0;
    if (data.length > 0) {
      min = Math.floor(data[0].time/100000);
      max = Math.ceil(data[data.length-1].time/100000);
    }
    console.log(min, max);
    // Problem: x too big, have to make it like date
    return (
      <VictoryLine
        range={{x: [min, max]}}
        x={d => d.time%10} y='emotion'
        labels={d => Math.floor(d.time/100000)}
        data={this.props.data}
      />
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
