import React,{useState} from 'react'
import {Typography,TextField,Button, IconButton, FormControl,Input,InputLabel} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles=makeStyles({
     item:{
         marginTop:'30px'
     },
     inputFields:{
         width:"300px",
         marginTop:'100px'
     },
     icons:{
         fontSize:"50px",
         marginTop:"30px",
         marginRight:"10px",
         color:"grey"
     },
     header:{
         fontWeight:"bolder",
         color:"grey"
     },
     FormControls:{
        marginTop:"30px"
     }
})

function Form() {
    const classes=useStyles()
    const [password,setPassword]=useState('')
    const [visible,setVisible]=useState(false)

    function handleVisible(){
        setVisible(!visible)
    }

    return (
        <div>
            <Typography className={`${classes.item} ${classes.header}`} variant="h4">Login Form</Typography>
            <Typography className={`${classes.item} ${classes.header}`} variant="h5">Sign In</Typography>
            
            <form>
                <EmailIcon className={classes.icons}/>
                <FormControl className={classes.FormControls}>
                    <InputLabel>Your Email</InputLabel>
                    <Input className={classes.inputFields} color="secondary"/>
                </FormControl>
                <br/>
                <LockIcon className={classes.icons}/>
                <FormControl className={classes.FormControls}>
                    <InputLabel>Password</InputLabel>
                    <Input  value={password} onChange={e=>setPassword(e.target.value)} type="password" className={classes.inputFields} color="secondary"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleVisible}>
                                    {visible?<Visibility/>:<VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />    
                </FormControl><br/>             
                <Button className={classes.item} variant="contained">Submit</Button>
                
            </form>
        </div>
    )
}

export default Form
