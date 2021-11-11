import { AppBar, makeStyles, Toolbar, Typography, InputBase, alpha, Badge,Avatar } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import AddAlertIcon from '@material-ui/icons/AddAlert';

const useStyle = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
  },

  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"

  },
  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    width: "50% ",
  },
  // searchButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up("sm")]: {
  //     display: "none",
  //   },
  // },
  input: {
    color: "white",
    marginLeft: theme.spacing(2),
  },
  icons:{
    display:"flex",
    alignItems:"center",
  },
  badge:{
    marginRight: theme.spacing(2)
  }
}))

const Navbar = () => {
  const classes = useStyle();
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            Afsana Eva's Blog
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            Eva's Blog
          </Typography>
          <div className={classes.search}>
            <SearchIcon />
            <InputBase placeholder="Search . . . " className={classes.input} />
          </div>

          <div className={classes.icons}>
          {/* <SearchIcon className="searchButton"/> */}
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <MailIcon />
            </Badge>
            <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <AddAlertIcon />
            </Badge>
            <Avatar alt="Afsana Eva" src="https://avatars.githubusercontent.com/u/41413300?v=4" />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar



