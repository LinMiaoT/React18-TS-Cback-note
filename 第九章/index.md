## Echarts 图表

### 封装自定义 hook

`useCharts.ts`

```js
export const useCharts = (): [
  LegacyRef<HTMLDivElement> | undefined,
  echarts.ECharts | undefined
] => {
  const chartRef = useRef<HTMLDivElement>(null)
  const [chartIns, setChartIns] = useState<echarts.ECharts>()
  useEffect(() => {
    setChartIns(echarts.init(chartRef.current))
  }, [])

  return [chartRef, chartIns]
}
```

### 线性图表使用

```js
const [lineRef, lineIns] = useCharts()
lineChart?.setOption({
  // title: {
  //   text: '订单和流水走势图'
  // },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['订单', '流水']
  },
  grid: {
    left: 50,
    right: 50,
    bottom: 20
  },
  xAxis: {
    data: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月'
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '订单',
      type: 'line',
      data: [10, 20, 30, 50, 60, 70, 80, 90, 100, 110, 120, 120]
    },
    {
      name: '流水',
      type: 'line',
      data: [
        1000, 2000, 3000, 5000, 600, 800, 2000, 3200, 1100, 1200, 6000, 5000
      ]
    }
  ]
})
```

### 饼图使用

```js
const [pieRef1, pieChart1] = useCharts()
pieChart1?.setOption({
  title: {
    text: '司机城市分布',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '城市分布',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 335, name: '北京' },
        { value: 310, name: '上海' },
        { value: 274, name: '广州' },
        { value: 235, name: '杭州' },
        { value: 400, name: '武汉' }
      ]
    }
  ]
})
```

### 雷达图使用

```js
const [radarRef, radarChart] = useCharts()
radarChart?.setOption({
  // title: {
  //   text: '司机模型诊断',
  //   left: 'center'
  // },
  legend: {
    data: ['司机模型诊断']
  },
  radar: {
    indicator: [
      { name: '服务态度', max: 10 },
      { name: '在线时长', max: 600 },
      { name: '接单率', max: 100 },
      { name: '评分', max: 5 },
      { name: '关注度', max: 10000 }
    ]
  },
  series: [
    {
      name: '模型诊断',
      type: 'radar',
      data: [
        {
          value: [8, 300, 80, 4, 9000],
          name: '司机模型诊断'
        }
      ]
    }
  ]
})
```
