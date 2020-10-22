import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";


const ListElem = ({id,title,author,...props}) => {
    return (
            <ListItem button>
                <ListItemIcon>
                    {id}
                </ListItemIcon>
                <ListItemText primary={title} />
                <ListItemText primary={author} />
            </ListItem>
        )
}

export default ListElem