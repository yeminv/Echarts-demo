import React, { Component } from 'react';
import echarts from 'echarts';
import './smoothLineChart.css'

class smoothLineChart extends Component {
  render() {
    return (
      <div className='smoothLineChart'>
        <div id='smoothLineChart'></div>
      </div>
    );
  }

  componentDidMount() {

    var myChart = echarts.init(document.getElementById('smoothLineChart'));

    var data = [];
    var data1 = [];
    var data2 = [];

    var date = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日'];
    for (var i = 0; i < 120; i++) {
        data.push(date[parseInt(i/8)]);
        data1.push((Math.sin(i / 6) * (i / 6 -5) + i / 8) * 3+30);
        data2.push((Math.cos(i / 5) * (i / 5 -7) + i / 9) * 3+30);
    }

    myChart.setOption({
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data,
            nameTextStyle: {
                // opacity: 0.4,
                // fontFamily: 'PingFangSC-Regular',
                // fontSize: '16px',
                color: 'red'                
            },
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                interval: 8,
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                lineStyle: {
                    opacity: 0.2,
                }
            },
            axisTick: {
                show: false
            },
            nameTextStyle: {
                // opacity: 0.4,
                fontFamily: 'PingFangSC-Regular',
                fontSize: '14px',
                color: '#FFFFFF'                
            }
        },
        series: [{
            data: data1,
            type: 'line',
            showSymbol: false,
            areaStyle: {
                color: 'rgba(103,227,243,0.11)'
            },
            lineStyle: {
                color: 'rgba(103,227,243)',
                width: '3'
            }
        },
        {
            data: data2,
            type: 'line',
            areaStyle: {
                color: 'rgba(147,123,242,0.18)'
            },
            showSymbol: false,
            lineStyle: {
                color: 'rgba(147,123,242)',
                width: '3'
            }
        }]
    });

  }
}

export default smoothLineChart;