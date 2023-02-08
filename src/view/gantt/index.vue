
<!-- 封装gantt组件 -->
<template>
    <div class="container">
      <gantt class="left-container" :tasks="tasks"></gantt>
    </div>
</template>
  
<script>
  import gantt from "./gantt.vue";
  export default {
    name: "GanttNeed",
    components: { gantt },
    data() {
      return {
        tasks: {//任务
            data: [
          {id: 1, text: '项目 #1', start_date: '01-01-2023',duration:2,color:'rgb(250, 136, 136)',status:{value:'weikaishi',level:1},leader:{name:'高先生',sex:1}, progress: 0.6,row_height:54},
          {id: 2, text: '项目 #2', start_date: '15-01-2023',duration:2,color:'rgb(64, 224, 195)',status:{value:'yiwancheng',level:3}, leader:{name:'高先生',sex:1}, progress: 0.4,row_height:54},
          {id: 3, text: '项目 #3', start_date: '15-01-2023',duration:2,color:'rgb(246, 198, 89)',status:{value:'jinxinghzong',level:2}, leader:{name:'刘女士',sex:2}, progress: 0.4,row_height:54},
          {id: 4, text: '项目 #4', start_date: '15-01-2023',duration:2,color:'rgb(246, 147, 231)',status:{value:'gezhizhong',level:4}, leader:{name:'高先生',sex:1}, progress: 0.4,row_height:54},
        ],
        links: [
          {id: 1, source: 1, target: 2, type: '0'}
        ]
            // data: [
			// {
			// 	id: 1, text: "Project #2", start_date: "01-01-2023", duration: 18, order: 10,
			// 	progress: 0.4, open: true
			// },
			// {
			// 	id: 2, 
            //     text: "Task #1", 
            //     start_date: "10-01-2023", 
            //     duration: 8, order: 10,
			// 	progress: 0.1, //完成进度
            //     parent: 1
			// },
			// {
			// 	id: 3, text: "Task #2", start_date: "15-1-2023", duration: 8, order: 20,
			// 	progress: 0.6, parent: 1
			// }
		    // ],
            // links: [
            //     {id: 1, source: 1, target: 2, type: "1"},
            //     {id: 2, source: 2, target: 3, type: "0"}
            // ]



        //   data: [
        //     {
        //       id: 11,
        //       text: "项目一 #1",
        //       start_date: "28-01-2023",
        //       duration: "11",
        //       progress: 0.6,
        //       open: true
        //     },
        //     {
        //       id: 1,
        //       text: "项目二 #2",
        //       start_date: "01-04-2023",
        //       duration: "18",
        //       progress: 0.4,
        //       open: true
        //     },
  
        //     {
        //       id: 2,
        //       text: "Task #1",
        //       start_date: "02-04-2023",
        //       duration: "8",
        //       parent: "1",
        //       progress: 0.5,
        //       open: true
        //     },
        //     {
        //       id: 3,
        //       text: "Task #2",
        //       start_date: "11-04-2023",
        //       duration: "8",
        //       parent: "1",
        //       progress: 0.6,
        //       open: true
        //     },
        //     {
        //       id: 4,
        //       text: "Task #3",
        //       start_date: "13-04-2023",
        //       duration: "6",
        //       parent: "1",
        //       progress: 0.5,
        //       open: true
        //     },
        //     {
        //       id: 5,
        //       text: "Task #1.1",
        //       start_date: "02-04-2023",
        //       duration: "7",
        //       parent: "2",
        //       progress: 0.6,
        //       open: true
        //     },
        //     {
        //       id: 6,
        //       text: "Task #1.2",
        //       start_date: "03-04-2023",
        //       duration: "7",
        //       parent: "2",
        //       progress: 0.6,
        //       open: true
        //     },
        //     {
        //       id: 7,
        //       text: "Task #2.1",
        //       start_date: "11-04-2023",
        //       duration: "8",
        //       parent: "3",
        //       progress: 0.6,
        //       open: true
        //     },
        //     {
        //       id: 8,
        //       text: "Task #3.1",
        //       start_date: "14-04-2023",
        //       duration: "5",
        //       parent: "4",
        //       progress: 0.5,
        //       open: true
        //     },
        //     {
        //       id: 9,
        //       text: "Task #3.2",
        //       start_date: "14-04-2023",
        //       duration: "4",
        //       parent: "4",
        //       progress: 0.5,
        //       open: true
        //     },
        //     {
        //       id: 10,
        //       text: "Task #3.3",
        //       start_date: "14-04-2023",
        //       duration: "3",
        //       parent: "4",
        //       progress: 0.5,
        //       open: true
        //     },
  
        //     {
        //       id: 12,
        //       text: "Task #1",
        //       start_date: "03-04-2023",
        //       duration: "5",
        //       parent: "11",
        //       progress: 1,
        //       open: true
        //     },
        //     {
        //       id: 13,
        //       text: "Task #2",
        //       start_date: "02-04-2023",
        //       duration: "7",
        //       parent: "11",
        //       progress: 0.5,
        //       open: true
        //     },
        //     {
        //       id: 14,
        //       text: "Task #3",
        //       start_date: "02-04-2023",
        //       duration: "6",
        //       parent: "11",
        //       progress: 0.8,
        //       open: true
        //     },
        //     {
        //       id: 15,
        //       text: "Task #4",
        //       start_date: "02-04-2023",
        //       duration: "5",
        //       parent: "11",
        //       progress: 0.2,
        //       open: true
        //     },
        //     {
        //       id: 16,
        //       text: "Task #5",
        //       start_date: "02-04-2023",
        //       duration: "7",
        //       parent: "11",
        //       progress: 0,
        //       open: true
        //     },
  
        //     {
        //       id: 17,
        //       text: "Task #2.1",
        //       start_date: "03-04-2023",
        //       duration: "2",
        //       parent: "13",
        //       progress: 1,
        //       open: true
        //     },
        //     {
        //       id: 18,
        //       text: "Task #2.2",
        //       start_date: "06-04-2023",
        //       duration: "3",
        //       parent: "13",
        //       progress: 0.8,
        //       open: true
        //     },
        //     {
        //       id: 19,
        //       text: "Task #2.3",
        //       start_date: "10-04-2023",
        //       duration: "4",
        //       parent: "13",
        //       progress: 0.2,
        //       open: true
        //     },
        //     {
        //       id: 20,
        //       text: "Task #2.4",
        //       start_date: "10-04-2023",
        //       duration: "4",
        //       parent: "13",
        //       progress: 0,
        //       open: true
        //     },
        //     {
        //       id: 21,
        //       text: "Task #4.1",
        //       start_date: "03-04-2023",
        //       duration: "4",
        //       parent: "15",
        //       progress: 0.5,
        //       open: true
        //     },
        //     {
        //       id: 22,
        //       text: "Task #4.2",
        //       start_date: "03-04-2023",
        //       duration: "4",
        //       parent: "15",
        //       progress: 0.1,
        //       open: true
        //     },
        //     {
        //       id: 23,
        //       text: "Task #4.3",
        //       start_date: "03-04-2023",
        //       duration: "5",
        //       parent: "15",
        //       progress: 0,
        //       open: true
        //     }
        //   ],
        //   links: [
        //     {
        //       id: 1, // 关联线id
        //       source: 1, //数据源任务的id
        //       target: 2, // 目标源任务的id
        //       type: "1" //关联线类型：0 - “结束到开始”，1 - “开始到开始”，2 - “结束到结束”
        //     },
        //     { id: 2, source: 1, target: 3, type: "1" },
        //     { id: 3, source: 3, target: 4, type: "1" },
        //     { id: 4, source: 4, target: 5, type: "0" },
        //     { id: 5, source: 5, target: 6, type: "0" }
        //   ]
        }
      };
    },
    
  };
  </script>
  
  <style>
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .container {
    height: 100%;
    width: 100%;
  }
  .left-container {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  </style>

<!-- <style lang="scss" >
@import "../../../node_modules/dhtmlx-gantt/codebase/dhtmlxgantt.css";

$gantbg:#304156;
.gant-contentw{
    width: 100%;
    height: 100vh;
    background: $gantbg;
    div{
        font-size:30px;
        color:#232323
    }
}
   
</style> -->