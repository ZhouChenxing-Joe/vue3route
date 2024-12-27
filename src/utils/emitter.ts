//引入mitt
import mitt from "mitt";

//调用mitt得到emitter，emitter能绑事件，触发事件
const emitter = mitt()


/* //绑定事件
emitter.on('event1',()=>{
    console.log('event1被调用了')
})

//触发事件
setTimeout(()=>{
    emitter.emit('event1')
},2000)

//每隔一秒触发一下事件
setInterval(()=>{
    emitter.emit('event1')
},1000)

//3秒后解绑event1
setTimeout(()=>{
    // emitter.off('event1')
    // 全都解绑
    emitter.all.clear()
},3000)
 */


//暴露emitter
export default emitter