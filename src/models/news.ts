import { getListNews } from "@/services/news"; 
export default {
    namespace: "news",
    state: {
        listNews: []
    },
    reducers: { // reducers 不能直接改对象，只能返回出去
        initNews(state: any, { payload }: any) {
            return {
                ...state,
                listNews: payload
            }
        }
    },
    effects: { // sage takeevery 异步动作
        *initNewsAction({ payload }: any, { call, put }:any) {
            // 发送请求，获取list
            const { list } = yield call(getListNews, payload);
            console.log("news list: ",list)
            // 设置值
            yield put({ type: 'initNews', payload: list });
        },
    },
}