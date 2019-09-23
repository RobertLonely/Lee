//导入Jquery
import $ from "jquery";
//导入 css样式表
import './css/index.css'
//导入 less样式表
import './css/index.less'
//导入 scss样式表
// import './css/index.scss'
//导入bootstrap样式表
// 注意： 如果要通过路径的形式，去引入 node_modules 中相关的文件，可以直接省略 路径前面的 node_modules 这一层目录，直接写 包的名称，然后后面跟上具体的文件路径
// 不写 node_modules 这一层目录 ，默认 就会去 node_modules 中查找
import 'bootstrap/dist/css/bootstrap.css'

$(function() {
  $("li:odd").css("backgroundColor", "red");
  $("li:even").css("backgroundColor", "pink");
});
