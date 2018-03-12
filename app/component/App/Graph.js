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

export default class Graph extends React.Component {
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
      ],
      chartType: 'line'
    };
  }
  componentWillReceiveProps(nextProps) {
    this.filterData(nextProps);
  }

  countData(props) {
    const emoText = ['Depressed', 'Sad', 'Meh', 'Happy', 'Joyful', 'Delighted', 'Loved'];
    const colorScale=['#899D78', '#A1B0AB', '#55B295', '#DB7F67', '#ED9B40',
      '#D34F73', '#BA3B46'];
    const emoCount = {};
    // initialize:
    for(let i = 0; i < 7; i++) {
      emoCount[i] = {x: emoText[i], y: 0, color: colorScale[i]};
    }
    //Count:
    props.data.forEach(emo => {
      emoCount[emo.emotion+2].y += 1; //+2 becuase we in database it range from -2 -> 5
    });
    return Object.values(emoCount);
  }

  filterData(nextProps) {  // filter color for only available emotions
    const filteredColor = [];
    const filteredData = [];
    console.log(this.props);
    // if (this.props.countData) {
      this.countData(nextProps).forEach(data => {
        if (data.y > 0) {
          filteredColor.push(data.color);
          filteredData.push(data);
        }
      });
    // }
    this.setState({filteredColor, filteredData});
  }

  renderLine() {
    const data = this.props.data.map(d => {
      console.log(moment.unix(d.time).dates());
    });
    return (
      <VictoryLine
        x={d => d.time%10} y='emotion'
        labels={d => d.time/100000}
        sortKey='x'
        data={this.props.data}
      />
    );
  }

  renderPie() {
    return (
      <VictoryPie
        style={{labels: {
          fontSize: 15,
          fill: 'white'
        }}}
        labelRadius={90}
        padAngle={2}
        colorScale={this.state.filteredColor}
        innerRadius={60}
        labels={(data) => (data.x)}
        data={this.state.filteredData}
        animate={{duration: 1500}}
      />
    );
  }

  renderChart() {
    if (this.state.chartType === 'pie') {
      return this.renderPie();
    } else {
      return this.renderLine();
    }
  }

  render() {
    console.log(this.state.filteredData);
    // if (!this.props.countData) return null;
    return (
      <View style={styles.graphContainer}>
        {this.renderChart()}
        <TouchableOpacity
          onPress={() => this.setState({chartType: 'pie'})}>
          <Text>Pie Chart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({chartType: 'line'})}>
          <Text>Line Chart</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
