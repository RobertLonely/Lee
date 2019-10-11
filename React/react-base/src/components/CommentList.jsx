import React from "react";

//导入CommentList组件的样式
import cList from "@/css/cList.scss";
// 导入评论项组件
import CommentItem from "@/components/CommentItem";

export default class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      // 评论列表数据
      list: [
        { id: 1, user: "我爱罗", content: "极地沙尘暴" },
        { id: 2, user: "鸣人", content: "螺旋丸" },
        { id: 3, user: "卡卡西", content: "千鸟" },
        { id: 4, user: "自来也", content: "通灵之术" },
        { id: 5, user: "宇智波佐助", content: "须佐吾能" }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1 className={cList.title}>这是评论列表组件</h1>
        {/* 循环遍历评论列表，生成每一项虚拟DOM */}
        {this.state.list.map(item => (
          <CommentItem key={item.id} {...item}></CommentItem>
        ))}
      </div>
    );
  }
}
