import { Button, Grid, } from "@mui/material"
import { useHistory } from "react-router"

export const Homepage = () => {
  let history = useHistory();

  const handleStartClick = () => {
    history.push(`/1238`)
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Button onClick={handleStartClick} sx={{ marginTop: "300px" }}>Click here to get started</Button>
      </Grid>
    </Grid>
  )
}