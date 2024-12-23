// stores/counter.js
import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  //actions 里面放置的是一个一个的方法用于响应组件中的“动作”
  actions: {
    increment(value: any) {
      if (this.sum < 10) {
        //修改数据(this是当前的CountStore)
        this.sum += value;
      }
      this.address = "中国";
      this.company = "科技";
    },
    minus(value:any){
      if(this.sum > -10){
        this.sum -= value;
      }
    }
  },
  //真正存储数据的地方
  // 也可以这样定义 state: () => ({ count: 0 })
  state() {
    return {
      sum: 5,
      address: "china",
      company: "IT",
    };
  },
  getters: {
    bigSum(state) {
      return state.sum * 100;
    },
  },
});
