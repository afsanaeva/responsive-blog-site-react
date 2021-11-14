import { Container, Typography,makeStyles } from '@material-ui/core';
import { Home } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({

}))

const Leftbar = () => {
  const classes = useStyle()
  return (
    <Container>
      <div className={classes.iteam}>
        <Home />
        <Typography>Homepage</Typography>
      </div>
    </Container>
  )
}

export default Leftbar