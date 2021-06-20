
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const usestyles = makeStyles({
    header : {
        backgroundColor : '#111111',
        position:'static',
        height:50,
    },
    handleroutes : {
       marginTop:-5
    },
    routes : {
        marginRight : 20,
        color : '#ffffff',
        textDecoration : 'none'
    }
})

const Navbar = () =>{
    const classes = usestyles()
    return(
       <AppBar className={classes.header}>
            <Toolbar className={classes.handleroutes}>
                <NavLink to='/' exact className={classes.routes}>Home</NavLink>
                <NavLink to='/AllUsers' exact className={classes.routes}>All Users</NavLink>
                <NavLink to='/AddUsers' exact className={classes.routes}>Add Users</NavLink>
           </Toolbar>
       </AppBar>
    )
}

export default Navbar;