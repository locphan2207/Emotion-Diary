import React from 'react';
import {View, Text,
  TouchableOpacity
} from 'react-native';
import {VictoryChart, VictoryPie, VictoryLine, VictoryTooltip,
  VictoryBar, VictoryAxis
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
        {x: 'Depressed', y: 1, color: '#899D78'},
        {x: 'Sad', y: 1, color: '#A1B0AB'},
        {x: 'Meh', y: 1, color: '#55B295'},
        {x: 'Happy', y: 1, color: '#DB7F67'},
        {x: 'Delighted', y: 1, color: '#ED9B40'},
        {x: 'Blissful', y: 1, color: '#D34F73'},
        {x: 'Loved', y: 1, color: '#BA3B46'},
      ],
      filteredData2: [] // for bar chart
    };
  }

  componentDidMount() {
    if (this.props.data.length > 0) {
      this.filterAvailableData(this.props);
    }
  }

  componentWillReceiveProps(nextProps) { // incase no data loaded in did mount, we do here
    this.filterAvailableData(nextProps);
  }

  countData(props) {
    const emoText = ['Depressed', 'Sad', 'Meh', 'Happy', 'Delighted', 'Blissful', 'Loved'];
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

  filterAvailableData(props) {  // filter color for only available emotions
    const filteredColor = [];
    const filteredData = [];
    this.countData(props).forEach(data => {
      if (data.y > 0) { // if count > 0 then we take
        filteredColor.push(data.color);
        filteredData.push(data);
      }
    });
    // }
    this.setState({filteredColor, filteredData, filteredData2: filteredData});
  }

  renderPie() {
    return (
      <View style={{alignItems: 'center'}}>
        <VictoryPie
          style={{labels: {
            fontSize: 15,
            fill: d => d.color
          }}}
          height={300}
          labelRadius={120}
          padAngle={2}
          colorScale={this.state.filteredColor}
          innerRadius={20}
          labels={(data) => (data.x)}
          data={this.state.filteredData}
          animate={{duration: 1500}}
        />
        <VictoryChart
          height={180} width={this.state.filteredData.length * 70}
          animate={{duration: 500}}
          padding={{left: 75, right: 75, top: 30, bottom: 0}}
        >
          <VictoryBar
            labels={(d) => `${d.y}`}
            data={this.state.filteredData2}
            style={{
              data: {
                fill: d => d.color,
                width: 12
              }
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={() => ''}
            style={{axis:{stroke: 'none'}}}
          />
        </VictoryChart>
      </View>
    );
  }

  render() {
    console.log(this.state.filteredData);
    // if (!this.props.countData) return null;
    return (
      <View style={styles.graphContainer}>
        {this.renderPie()}
      </View>
    );
  }
}
