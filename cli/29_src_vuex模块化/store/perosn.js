//人员管理相关配置
import axios from 'axios'
import {nanoid} from "nanoid";

const personOptions = {
    namespaced: true,
    actions: {
        addPersonDuan(context, value) {
            if (value.name.indexOf('段') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓段！')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', {id: nanoid(), name: response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },

    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations中的ADD_PERSON被调用了')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {id: '001', name: 'jagger'},
            {id: '002', name: 'yuxiaohong'}
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}
export default personOptions