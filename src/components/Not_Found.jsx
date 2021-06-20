
import notFound from '../Assests/Images/notFound.png';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    image : {
        height : '50%',
        width : '50%',
        marginLeft : '30%'
    }
})

const NotFound = () => {
    const classes = useStyles();
    return (
       <Box>
           <img className={classes.image} src={notFound}/>
       </Box>
    )
}

export default NotFound;