import React,{useState} from 'react'
import {Typography,TextField,Button, IconButton} from '@material-ui/core'
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
         
     },
     icons:{
         fontSize:"50px",
         marginTop:"37px",
         marginRight:"12px",
         color:"grey"
     },
     header:{
         fontWeight:"bolder",
         color:"grey"
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
                <TextField className={`${classes.item} ${classes.inputFields}`} color="secondary" label="Your Email"/><br/>
            
                <LockIcon className={classes.icons}/>                
                <TextField value={password} onChange={e=>setPassword(e.target.value)} className={`${classes.item} ${classes.inputFields}`} type="password" color="secondary" label="Your Password"
                     inputProps={{
                         endAdorment:<InputAdornment position="end">
                                <IconButton onClick={handleVisible}>
                                    {visible?<Visibility/>:<VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }}
                /><br/>
                <Button className={classes.item} variant="contained">Submit</Button>
                <input/>
            </form>
        </div>
    )
}

export default Form
