import React, {useEffect} from "react";
import {connect} from "react-redux";
import List from "@material-ui/core/List";
import ListElem from "./ListElem/ListElem";
import {getListData} from "../../redux/reducers/ListPageReducer";


const ListPage = ({getListData,...props}) =>{
    useEffect(()=>{
        getListData()
    },[])
    return(
        <List>
            {props.listState.listData.map((item)=>{
                return <ListElem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    author={item.author} />
            })}
        </List>
    )
}
const mapState = (state) =>({
  listState: state.ListPageReducer
})
export default connect(mapState, {getListData})(ListPage)