import React, {useEffect} from "react";
import {connect} from "react-redux";
import List from "@material-ui/core/List";
import ListElem from "./ListElem/ListElem";
import {getListData, listRevers} from "../../redux/reducers/ListPageReducer";
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";


const ListPage = ({getListData,listRevers, ...props}) => {
    useEffect(() => {
        getListData()
    }, [])
    return (
        <Grid container>
            <Grid style={{marginTop:"40px"}} item xs={12}>
                <Button onClick={()=>listRevers(props.listState.listData)} variant="contained" color="primary">
                    Revers
                </Button>
            </Grid>
            <Grid item xs={12}>
            <List>
                {props.listState.listData.map((item) => {
                    return <ListElem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        author={item.author}/>
                })}
            </List>
        </Grid>
</Grid>
)
}
const mapState = (state) =>({
listState: state.ListPageReducer
})
export default connect(mapState, {getListData,listRevers})(ListPage)