import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { PublicService } from '../../service/public.service';
import { Router } from '@angular/router';
import * as echarts from 'echarts';
@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss']
})
export class VisualComponent implements OnInit, OnDestroy {
  @ViewChild('demo',{static:true}) demo: ElementRef;
  echart: any; // 存储echarts实例
  charType = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
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
        data: [
          { value: 3350, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 500, name: '搜索引擎' }
        ]
      }
    ]
  };
  data;
  nameList = [
    '赵',
    '钱',
    '孙',
    '李',
    '周',
    '吴',
    '郑',
    '王',
    '冯',
    '陈',
    '褚',
    '卫',
    '蒋',
    '沈',
    '韩',
    '杨',
    '朱',
    '秦',
    '尤',
    '许',
    '何',
    '吕',
    '施',
    '张',
    '孔',
    '曹',
    '严',
    '华',
    '金',
    '魏',
    '陶',
    '姜',
    '戚',
    '谢',
    '邹',
    '喻',
    '柏',
    '水',
    '窦',
    '章',
    '云',
    '苏',
    '潘',
    '葛',
    '奚',
    '范',
    '彭',
    '郎',
    '鲁',
    '韦',
    '昌',
    '马',
    '苗',
    '凤',
    '花',
    '方',
    '俞',
    '任',
    '袁',
    '柳',
    '酆',
    '鲍',
    '史',
    '唐',
    '费',
    '廉',
    '岑',
    '薛',
    '雷',
    '贺',
    '倪',
    '汤',
    '滕',
    '殷',
    '罗',
    '毕',
    '郝',
    '邬',
    '安',
    '常',
    '乐',
    '于',
    '时',
    '傅',
    '皮',
    '卞',
    '齐',
    '康',
    '伍',
    '余',
    '元',
    '卜',
    '顾',
    '孟',
    '平',
    '黄',
    '和',
    '穆',
    '萧',
    '尹',
    '姚',
    '邵',
    '湛',
    '汪',
    '祁',
    '毛',
    '禹',
    '狄',
    '米',
    '贝',
    '明',
    '臧',
    '计',
    '伏',
    '成',
    '戴',
    '谈',
    '宋',
    '茅',
    '庞',
    '熊',
    '纪',
    '舒',
    '屈',
    '项',
    '祝',
    '董',
    '梁',
    '杜',
    '阮',
    '蓝',
    '闵',
    '席',
    '季',
    '麻',
    '强',
    '贾',
    '路',
    '娄',
    '危'
  ];
  constructor(private publicService: PublicService, private router: Router) {}

  ngOnInit() {
    this.data = this.genData(50);
    this.echart = echarts.init(this.demo.nativeElement);
    this.echart.setOption({
      title: {
        text: '同名数量统计',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: this.data.legendData,
        selected: this.data.selected
      },
      series: [
        {
          name: '姓名',
          type: 'pie',
          radius: '55%',
          center: ['40%', '50%'],
          data: this.data.seriesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],
      color: ['#25859e', '#6acece', '#e78816', '#eabc7f', '#12619d']
    });
    this.publicService.getData().subscribe(data => {
      // 以下是指令方法二
      this.charType = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
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
            data: data
          }
        ]
      };
    });
  }
  genData(count) {
    let legendData = [];
    let seriesData = [];
    let selected = {};
    let name = '';
    for (let i = 0; i < count; i++) {
      name =
        Math.random() > 0.65
          ? this.makeWord(4, 1) + '.' + this.makeWord(3, 0)
          : this.makeWord(2, 1);
      legendData.push(name);
      seriesData.push({ name: name, value: Math.round(Math.random() * 10000) });
      selected[name] = i < 6;
    }
    return {
      legendData: legendData,
      seriesData: seriesData,
      selected: selected
    };
  }
  makeWord(max, min) {
    let nameLen = Math.ceil(Math.random() * max + min);
    let name = [];
    for (let i = 0; i < nameLen; i++) {
      name.push(
        this.nameList[Math.round(Math.random() * this.nameList.length - 1)]
      );
    }
    return name.join('');
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.echart.resize();
  }
  ngOnDestroy() {
    this.echart = null;
  }
}
