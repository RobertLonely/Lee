//导入Jquery
import $ from "jquery";
//导入 css样式表
import './css/index.css'
//导入 less样式表
import './css/index.less'
//导入 scss样式表
// import './css/index.scss'

$(function() {
  $("li:odd").css("backgroundColor", "red");
  $("li:even").css("backgroundColor", "pink");
});
