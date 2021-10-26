import AccountCircle from "@mui/icons-material/AccountCircle"
import { Button, Grid, TextField } from "@mui/material"
import { Box } from "@mui/system"

export const AddNewComment = () => {
  return (
    <Grid container spacing={2} >
      <Grid item md={12}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Add a public comment" variant="standard" sx={{ width: "100%" }} />
        </Box>
      </Grid>
      <Grid item md={12} sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button variant="contained">Comment</Button>
        <Button sx={{ marginRight: "15px" }} variant="outlined">Cancel</Button>
      </Grid>
    </Grid>
  )
}