  angular
      .module('myApp')
      .controller('analaticdashbordCtrl', function($scope, $http) {


          $(function() {
              var colors = Highcharts.getOptions().colors,
                  lineData = [
                      { "zoneId": "Zona 01", "data": { "count": 1, "speed": [30], "time": 1466781876681 } },
                      { "zoneId": "Zona 02", "data": { "count": 2, "speed": [5], "time": 1466781876681 } },
                      { "zoneId": "Zona 03", "data": { "count": 4, "speed": [6], "time": 1466781876681 } },
                      { "zoneId": "Zona 04", "data": { "count": 3, "speed": [7], "time": 1466781876681 } },
                      { "zoneId": "Zona 05", "data": { "count": 1, "speed": [1], "time": 1466781876681 } }
                  ],
                  pieData = [
                      { "zoneId": "Zona 01", "data": { "count": 1, "speed": 6, "time": 1466781876681 } },
                      { "zoneId": "Zona 02", "data": { "count": 2, "speed": 7.5, "time": 1466781876681 } },
                      { "zoneId": "Zona 03", "data": { "count": 4, "speed": 10, "time": 1466781876681 } },
                      { "zoneId": "Zona 04", "data": { "count": 3, "speed": 15, "time": 1466781876681 } },
                      { "zoneId": "Zona 05", "data": { "count": 1, "speed": 25, "time": 1466781876681 } }
                  ],
                  barNameData = [],
                  barSpeedData = [],
                  browserData = [],
                  versionsData = [],
                  versionLineData = [],
                  i,
                  j,
                  dataLen = pieData.length;
              for (i = 0; i < dataLen; i += 1) {
                  versionsData.push({
                      name: pieData[i].zoneId,
                      y: pieData[i].data.speed
                  });

                  versionLineData.push({
                      name: lineData[i].zoneId,
                      data: lineData[i].data.speed
                  });
                  barNameData.push(pieData[i].zoneId);
                  barSpeedData.push(pieData[i].data.speed)
              }
              setInterval(function() {
                  for (i = 0; i < dataLen; i += 1) {
                      versionLineData[i].data.push(Math.floor((Math.random() * 100) + 1));
                  }
                  var chart = new Highcharts.Chart('line-container', {

                      title: {
                          text: 'Speed Zones',
                           x : -500,
                          style: {
                              color: '#7CB2ED ',
                              fontWeight: 'bold',
                          }
                      },
                      legend: {
                          layout: 'vertical',
                          align: 'right',
                          verticalAlign: 'middle'
                      },
                      yAxis: {
                          labels: {
                              format: '{value} km'
                          }
                      },
                      plotOptions: {
                          series: {
                              label: {
                                  connectorAllowed: false
                              },
                              pointStart: Date.UTC(2010, 0, 1),
                              pointInterval: 24 * 3600 * 1000 // one day
                          }
                      },

                      series: versionLineData,

                      responsive: {
                          rules: [{
                              condition: {
                                  maxWidth: 700
                              },
                              chartOptions: {
                                  legend: {
                                      layout: 'horizontal',
                                      align: 'center',
                                      verticalAlign: 'bottom'
                                  }
                              }
                          }]
                      }

                  });
              }, 60000);

              Highcharts.chart('line-container', {

                  title: {
                      text: 'Speed Zones',
                       x : -500,
                       style: {
                              color: '#7CB2ED ',
                              fontWeight: 'bold',
                          }
                  },
                  legend: {
                      layout: 'vertical',
                      align: 'right',
                      verticalAlign: 'middle'
                  },
                  yAxis: {
                      labels: {
                          format: '{value} km'
                      }
                  },
                  plotOptions: {
                      series: {
                          label: {
                              connectorAllowed: false
                          },
                          pointStart: Date.UTC(2010, 0, 1),
                          pointInterval: 24 * 3600 * 1000 // one day
                      }
                  },

                  series: versionLineData,

                  responsive: {
                      rules: [{
                          condition: {
                              maxWidth: 700
                          },
                          chartOptions: {
                              legend: {
                                  layout: 'horizontal',
                                  align: 'center',
                                  verticalAlign: 'bottom'
                              }
                          }
                      }]
                  }

              });

              Highcharts.chart('bar-container', {
                  chart: {
                      type: 'column'
                  },
                  title: {
                      text: 'Count by Zones',
                      x : -200,
                       style: {
                              color: '#7CB2ED ',
                              fontWeight: 'bold',
                          }

                  },

                 legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                  xAxis: {
                      categories: barNameData,
                      crosshair: true
                  },
                  yAxis: {
                      min: 0,
                      title: {
                          text: ' Speed (km)'
                      }
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      },
                      bar : {
                        showInLegend: true
                      }
                  },

                  series: [{
                      data: barSpeedData

                  }]
              });

              Highcharts.chart('pie-container', {
                  chart: {
                      type: 'pie'
                  },
                  title: {
                      text: 'Speed Average',
                       x : -100,
                      style: {
                          color: '#7CB2ED ',
                          fontWeight: 'bold',
                      }
                  },
                 legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                plotOptions: {
                    pie: {
                        shadow: false,
                        center: ['50%', '50%'],
                        showInLegend: true
                    }
                },
                  tooltip: {
                      valueSuffix: '%'
                  },
                  series: [{
                      name: 'Zone',
                      data: browserData,
                      size: '0',
                      dataLabels: {
                          enabled: false,
                          formatter: function() {
                              return this.y > 5 ? this.point.name : null;
                          },
                          color: '#ffffff',
                          distance: -30
                      }
                  }, {
                      name: 'Versions',
                      data: versionsData,
                      size: '80%',
                      innerSize: '60%',
                      dataLabels: {
                          enabled: false,
                          formatter: function() {
                              return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                                  this.y + '%' : null;
                          }
                      },
                      id: 'versions'
                  }],
                  responsive: {
                      rules: [{
                          condition: {
                              maxWidth: 200
                          },
                          chartOptions: {
                              series: [{
                                  id: 'versions',
                                  dataLabels: {
                                      enabled: false
                                  }
                              }]
                          }
                      }]
                  }
              });
          });
      });