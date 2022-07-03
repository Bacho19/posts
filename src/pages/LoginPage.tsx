import { Button, Grid, TextField } from '@mui/material';

const LoginPage = () => {
    return (
        <Grid>
            <form>
                <TextField type="email" />  
                <TextField type="password" />
                <Button type="submit">
                    Login
                </Button>
            </form>
        </Grid>
    )
};

export default LoginPage;
