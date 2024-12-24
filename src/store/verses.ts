
import {defineStore} from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'
export const useVerseStore = defineStore('verses',{
    actions:{
        async getAVerse(){
            let { data: { text: title } } = await axios.get('https://bible-api.com/john+3:16')
        //这里的提供的api link 不能直接取出content，所以要从text分离出来，要想下面这样写
        // let title = data.text.trim()

        //把请求回来的字符串包装成一个对象。
        let obj = { id: nanoid(), title } 
        //放到数组中
        this.verses.unshift(obj)
        }
    },
    state(){
        return{
            verses:[
                { id: 'v1', title: '约翰福音 3:16 😊' },
                { id: 'v2', title: '诗篇 23:1 😊' },
                { id: 'v3', title: '腓立比书 4:13 😊' }
            ]
            /* verses:JSON.parse(localStorage.getItem('verses') as string) || [] */
        }
    }
})  
/* version */