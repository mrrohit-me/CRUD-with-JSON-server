import { FormGroup, FormControl, InputLabel, Input, makeStyles, Button, Typography } from "@material-ui/core";
import { useState } from "react";
import { addUsers } from "../service/api";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    container : {
        width : "50%",
        margin : '5% 0 0 25%',
        '& > *' : {
            marginTop : 10
        }
    }
})



const IntialValues = {
    name :'',
    username :'',
    email :'',
    number :'',
}

const AddUsers = () => {
    const classes = useStyles();
    const histroy = useHistory();

    const [users, setUsers] = useState(IntialValues);
    const { name, email, username, number } = users;

    const userDetails = async () => {
        await addUsers(users);
        histroy.push('./AllUsers')
    }

    const onChangeValue = (text) =>{
        setUsers({ ...users, [text.target.name] : text.target.value })
      
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Users</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(text) => onChangeValue(text)} name="name" value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(text) => onChangeValue(text)} name="username" value={username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(text) => onChangeValue(text)} name="email" value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Number</InputLabel>
                <Input onChange={(text) => onChangeValue(text)} name="number" value={number}/>
            </FormControl>
            <Button variant="contained" color='secondary' onClick={()=>userDetails()}> Add Users</Button>
        </FormGroup>
    )
}

export default AddUsers;