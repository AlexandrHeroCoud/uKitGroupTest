import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";


const ListElem = ({id,title,author,...props}) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={id}
                secondary={
                    <>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {title}
                        </Typography>
                        {author}
                    </>
                }
            />
        </ListItem>
        )
}

export default ListElem