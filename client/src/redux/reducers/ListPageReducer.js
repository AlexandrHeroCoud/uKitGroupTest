import {listPageAPI, test} from "../../api/api";


const SET_LIST_DATA = "list-page/SET_LIST_DATA"


let initialState = {
   listData:[{}]
}


const ListPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST_DATA:
            return {
                ...state,
                listData: action.data
            }
        default:
            return state
    }
}


const setListDataAC = (data) => ({
    type: SET_LIST_DATA,
    data: data
})



export const getListData = () => async (dispatch) => {
    try {
        const resp = await listPageAPI.getData()
        dispatch(setListDataAC(resp.data))
    } catch (e) {
        console.error(e);
    }
}
export const listRevers = (data) => async (dispatch) =>{
    let dataInto = [...data]
    dispatch(setListDataAC(dataInto.reverse()))
}
export default ListPageReducer