
import Vue from 'vue'
// 轮播
import swipe from './swipe'
// 图标
import iconfont from './iconfont'
// 侧边栏所有栏目
import sideColumn from './sideColumn'
// 布局
import layoutWrap from './layout'
// 推荐
import recommend from './recommend'
// 基础组件
import basic from './basic'
// 文章列表
import article from './articleList'

var conponents = [
  ...swipe,
  ...iconfont,
  ...layoutWrap,
  ...recommend,
  ...basic,
  ...article,
  ...Object.values(sideColumn).flat(Infinity)
]


//出口函数为组件安装函数
const install = vm => {
  conponents.forEach(component => {
    vm.component(component.name, component)
  });
  // for (const key in jsComp) {
  //   if (!vm.prototype.hasOwnProperty(key)) {
  //     Vue.prototype[key] = jsComp[key];
  //   }else{
  //     console.warn( key + '被占用')
  //   }
  // }
}
export default {
  install,
}