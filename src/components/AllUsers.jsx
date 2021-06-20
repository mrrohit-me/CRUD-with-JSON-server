import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles,Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getUri, deleteusers} from '../service/api'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    table : {
        width : '90%',
        margin : '50px 0 0  60px'
    },
    thead : {
        '& > *' :{
            background: 'grey',
            color: '#ffffff',
            fontSize: 16,
        }
    },
    row : {
        '& > *' : {
            fontSize : 15
        }
    }
})



const AddUsers = () => {

    const classes = useStyles();

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getAllusers()
    })

    const getAllusers = async() =>{
       const resp = await getUri()
       setUsers(resp.data)
    }

    const deleteUser = async(id) => {
        alert(id)
        await deleteusers(id);
        getAllusers();
    }

    return (
          <Table className={classes.table}>
              <TableHead>
                <TableRow className={classes.thead}>
                        <TableCell>id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Number</TableCell>
                        <TableCell></TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                    {
                        users.map(user => 
                        (<TableRow className={classes.row}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.number}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color='primary' style={{ marginRight: 10 }} component={Link} to={`/EditUser/${user.id}`}>Edit</Button>
                                        <Button variant="contained" color='secondary' onClick={() => deleteUser(user.id)}>delete</Button>
                                    </TableCell>
                                </TableRow>
                        ))
                    }
              </TableBody>
          </Table>
    )
}

export default AddUsers;