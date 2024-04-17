import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { useLocation } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


const Navbars = () => {



    const location = useLocation();
    const shouldRenderSidebar = !['signIn', 'signUp','Message'].includes(
      location.pathname.replace('/', '')
    );
    if (!shouldRenderSidebar) {
      return null;
    }
  

    return (
        <>
            <AppBar className='appBar'>
                <Container maxWidth="xl">
                    <div className='navbar_container'>
                        <div className='nav_container'>
                            <Link to="/"> <img src={logo} alt="icons" className='logo' /></Link>
                            <div className='nav_Links'>
                                <Link to="/">Home</Link>
                                <Link to="/">Products</Link>
                            </div>
                        </div>
                        <div className="Nav_icon">
                            <Link to="/signIn">Sign in</Link>
                            {/* {users && users.username ? <Link to="/sign-in" >Logout</Link> : <Link to="/sign-in">Sign in</Link>} */}
                            <Link to="/SelectedProduct">
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </Link>
                            <Stack>
                                {/* {users && users.picture ? (<Avatar alt="icons" src={users.picture}  sx={{ width: 40, height:40 }}/>) : (<Avatar sx={{ bgcolor: deepOrange[500] }}>
                                <div className='capitalize'>{users && users.username ? users.username.slice(0, 1) : ""}</div></Avatar>)} */}
                                <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
                            </Stack>
                        </div>
                    </div>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbars
