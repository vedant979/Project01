import { AppBar, Toolbar } from '@mui/material'

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar sx={{
            bgcolor:"black",
            fontSize:"30px",
            fontWeight:"500"
        }}>
             Navbar
        </Toolbar>
    </AppBar>
  )
}
