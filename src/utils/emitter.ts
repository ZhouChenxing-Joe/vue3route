//引入mitt
import mitt from "mitt";

//调用mitt得到emitter，emitter能绑事件，触发事件
const emitter = mitt()


//绑定事件
emitter.on('event1',()=>{
    console.log('emitter被调用了')
})

//触发事件
setTimeout(()=>{
    emitter.emit('event1')
},2000)

//暴露emitter
export default emitter