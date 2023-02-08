<template>
    <div ref="gantt" class="left-container" ></div>
</template>
<script>
  import { gantt } from "dhtmlx-gantt";
  
  export default {
    name: "gantt",
    props: {
      tasks: {
        type: Object,
        default() {
          return { data: [], links: [] };
        }
      }
    },
    data(){
      return{
        statustype:[
          {value: 'weikaishi',label: '未开始',level:1,icon:'el-icon-remove-outline'},
          {value: 'jinxinghzong',label: '进行中',level:2,icon:'el-icon-time'},
          {value: 'yiwancheng',label: '已完成',level:3,icon:'el-icon-circle-check'},
          {value: 'gezhizhong',label: '搁置中',level:4,icon:'el-icon-time'},
        ]
      }
    },
    mounted: function() {
      console.log('执行了吗？')
      var colContent = function (task) {//定义增删改查dom标签
      return ('<i class="fa gantt_button_grid gantt_grid_edit fa-pencil"'+
                  'onclick="clickGridButton(' + task.id + ', \'edit\')"></i>' +
              '<i class="fa gantt_button_grid gantt_grid_add fa-plus"'+
                  'onclick="clickGridButton(' + task.id + ', \'add\')"></i>' +
              '<i class="fa gantt_button_grid gantt_grid_delete fa-times"'+
                  'onclick="clickGridButton(' + task.id + ', \'delete\')"></i>');
      };
      
      let that =this;
      // console.log('jinru')
      gantt.attachEvent("onTaskDblClick", function (id, e) {return false})//双击任务触发（每一行），true开启，false关闭
    gantt.config.auto_types = true; //自动调整类型,当存在字节点时自动升级为project
    gantt.config.sort = true;//点击表头可排序

    
      gantt.config.columns = [// 左边表头，列配置
          {
          name: "text", 
          label: "标题", 
          // tree: true, //icon
          width: 170,
          resize:true,
          priority:1,
          template: function(task) {//使用模板对样式或者dom标签进行在创作
                        // return vm.buildWbsCode(task);
                        // console.log(task,'task')
                        let vnodes =[];
                        // that.addfunction();
                        vnodes.push(`
                        <span class="g-colc-icon"><i class="el-icon-tickets" style="color:#fff;background:rgb(148, 115, 253);padding:2px;margin-right:6px;border-radius:2px"></i>${task.text}</span> 
                        <span class="eadit-buttn"><span><i class="el-icon-circle-plus-outline" onclick='addfunction()' style="margin-right:10px;z-index:888888"></i></span>
                        <i class="el-icon-edit" onclick="clickGridButton(${task.id}, 'edit')"></i>
                        </span>

                        `);
                        // console.log(vnodes,'vnodes')
                        return vnodes
                      
                        },
        },
        {
          name:'status',
          label:'状态',
          width: 170,
          resize:true,
          template: function(task){
          
            let vnodes=[];
            vnodes.push();
            let item = that.statustype.filter(item=>item.value==task.status.value)
         
            // + 注意动态拼接方式
            return `<span class='g-status${item[0].level}' @click="that.onStatus"><i class="${item[0].icon}"></i> ${item[0].label}</span>`
           
          }

        },
          // {name: "start_date", label: "开始时间",align: "center", width: 90,resize:true},
          {name: "leader", label: "负责人",align: "center", width: 80,
          template: function(task){
            console.log(task.leader,'leader')
            return `<div class='g-leader'><span>${task.leader.sex==1?'先生':'女士'}</span>${task.leader.name}</div>`
          }
        },
          {name: "add", width: 40}
      ];


    gantt.config.layout = {//展示配置滚动条
      css: "left-container",
      rows:[
        {
          cols: [
            {view: "grid", id: "grid", scrollX:"scrollHor", scrollY:"scrollVer"},
            {resizer: true, width: 1},
            {view: "timeline", id: "timeline", scrollX:"scrollHor", scrollY:"scrollVer"},
            {view: "scrollbar", scroll: "y", id:"scrollVer"}
          ]
         },
        {view: "scrollbar", scroll: "x", id:"scrollHor", height:20}
      ]
  };

    // 样式调整
    gantt.templates.task_class  = function(start, end, task){
      console.log('?',task)
    switch (task.status){
        case "1":
            return "high";
            break;
        case "2":
            return "medium";
            break;
        case "3":
            return "low";
            break;
    }
};
    // 
    function addfunction(){
      console.log('adddd')
      gantt.addTask({
      id:10,
      text:"Project #1",
      start_date:"02-09-2020",
      duration:28
      });
      }
      gantt.config.scale_height = 50;//设置时间刻度的高度和网格的标题

      gantt.config.scales = [
        { unit: "month", step: 1, format: "%F, %Y" },
        { unit: "day", step: 1, format: "%j, %D" }
      ];
  

      gantt.init(this.$refs.gantt);// 初始化
      gantt.parse(this.$props.tasks);

      // 定义函数
     
    },
    methods: {
      onStatus(){
        console.log('点击弹框')
      },
      addfunction(){
      console.log('adddd')
      gantt.addTask({
      id:10,
      text:"Project #1",
      start_date:"02-09-2020",
      duration:28
      });
      }
      
    },
  };
  </script>
  
  <style lang="scss" >
  @import "dhtmlx-gantt/codebase/dhtmlxgantt.css";

  //定义混入复用样式
  @mixin task-status($color:rgb(250, 136, 136)){
    z-index:100;
    display:inline-block;
    background:$color;
    color:#fff;
    border-radius: 18px;
    height: 24px;
    line-height: 24px;
    padding-left:12px;
    padding-right:12px
  }

 .g-status1{
   @include task-status;

}
.g-status2{
   @include task-status(rgb(246, 198, 89));
}
.g-status3{
   @include task-status(rgb(64, 224, 195));
}
.g-status4{
   @include task-status(rgb(246, 147, 231));
}
.g-leader{
   span{
    display: inline-block;
    background: rgb(132, 225, 126);
    color:#fff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    line-height: 24px;
    font-size: 12px;
    vertical-align: middle;
    margin-right: 10px;
   }
}
  .left-container {
    /**自动获取可视化屏幕的高度 */
     height: calc(100vh); 
    .eadit-buttn{
      margin-left: 20px;
    }
  }
  .g-colc-icon {
      
     }
  </style>
<style lang="scss">
.gantt_task_line {
    // top: 12px !important;
    // height: 30px !important;
    // line-height: 30px !important; 
}
// 定义task条颜色，根据优先级
// .gantt_task_line{
//         border-color: rgba(0, 0, 0, 0.25);
//     }
//     .gantt_task_line .gantt_task_progress {
//         background-color: rgba(0, 0, 0, 0.25);
//     }
 
//     /* high */
//     .gantt_task_line.high {
//         background-color: #03A9F4;
//     }
//     .gantt_task_line.high .gantt_task_content {
//         color: #fff;
//     }
 
//     /* medium */
//     .gantt_task_line.medium {
//         background-color: #f57730;
//     }
//     .gantt_task_line.medium .gantt_task_content {
//         color: #fff;
//     }
 
//     /* low */
//     .gantt_task_line.low {
//         background-color: #e157de;
//     }
//     .gantt_task_line.low .gantt_task_content {
//         color: #fff;
//     }
</style>