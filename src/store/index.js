// 导入需要配置vuex数据
import Vue from 'vue'
import Vuex from 'vuex'
import data from './data'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    data,
    leftToggle:false,
    admin:"AdminLTE",
    option1:{
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', 43.3, 85.8, 93.7],
          ['Milk Tea', 83.1, 73.4, 55.1],
          ['Cheese Cocoa', 86.4, 65.2, 82.5],
          ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
      },
      xAxis: {type: 'category'},
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
      ]
    },
    option2:{
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        smooth:true,
        type: 'line',
        areaStyle: {}
      }]
    },
    option3:{
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series: [
        {
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
          ]
        }
      ]
    },
    option4:{
      color: ['#d14a61', '#675bba'],
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data:['2015 降水量', '2016 降水量']
      },
      grid: {
        top: 70,
        bottom: 50
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#5793f3'
            }
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return '降水量  ' + params.value
                  + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
              }
            }
          },
          data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
        },
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#5793f3'
            }
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return '降水量  ' + params.value
                  + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
              }
            }
          },
          data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name:'2015 降水量',
          type:'line',
          xAxisIndex: 1,
          smooth: true,
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
          name:'2016 降水量',
          type:'line',
          smooth: true,
          data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        }
      ]
    },

    lodaings:{
      columns12: [
        {
          type: 'index',
          slot: 'name',
          width: 60,
          align:"center"
        },
        {
          title: 'Task',
          key: 'task'
        },
        {
          title: 'Progress',
          slot: 'progress',
        },
        {
          title: 'Lable',
          slot: 'lable',
          align:'center',
          width: 80,
        }
      ],
      data6: [
        {
          // name: '1',
          task: 'Update software',
          progress:{
            num:55,
            color:'red',
          },
          lable:{
            btnColor:'error'
          }

        },
        {
          // name: '2',
          task: 'Clean database',
          progress:{
            num:70,
            color:'orange',
            btnColor:'warning'
          },
          lable:{
            btnColor:'warning'
          }
        },
        {
          // name: '3',
          task: 'Cron job running',
          progress:{
            num:30,
            color:'blue',
            btnColor:'info'
          },
          lable:{
            btnColor:'info'
          }
        },
        {
          // name: '4',
          task: 'Fix and squish bugs',
          progress:{
            num:90,
            color:'green',
            btnColor:'success'
          },
          lable:{
            btnColor:'success'
          }
        }
      ],
      columns1: [
        {
          title: 'ID',
          key: 'id',
          width: "60%",
          align:'center',
        },
        {
          title: 'User',
          key: 'name',
          width: "130%",
          align:'center',
        },
        {
          title: 'Date',
          key: 'date',
          width: "150%",
          align:'center',
        },
        {
          title: 'Status',
          slot: 'status',
          width: "150%",
          align:'center',
        },
        {
          title: 'Reason',
          key: 'reason'
        }
      ],
      data1: [
        {
          id:'183',
          name: 'John Brown',
          reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.',
          date: '2016-10-03',
          status:{
            text:"Approved",
            color:"success"
          }
        },
        {
          id:'289',
          name: 'Jim Green',
          reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.',
          date: '2016-10-01',
          status:{
            text:"Pending",
            color:"warning"
          }
        },
        {
          id:'362',
          name: 'Joe Black',
          reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.',
          date: '2016-10-02',
          status:{
            text:"Approved",
            color:"info"
          }
        },
        {
          id:'275',
          name: 'Jon Snow',
          reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.',
          date: '2016-10-04',
          status:{
            text:"Denied",
            color:"error"
          }
        }
      ]
    },

  },

  mutations:{
    /*
    * r如果在mutation和actions中，使用解构赋值获取state中的数据，那就只能动态获取，不能设置，设置的值不会响应到state中，
    * 如果要设置，那就接收state本身
    * */
    setLeftToggle:(state) => {
      state.leftToggle = !state.leftToggle;
    }
  },
  strict:true

})
