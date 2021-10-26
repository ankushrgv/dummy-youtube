import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system";

export const CommentCard = (props) => {
  const { data } = props;

  return (
    <Grid container spacing={2} sx={{ marginBottom: "25px" }}>
      <Grid item md={1}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 1 }} />
        </Box>
      </Grid>
      <Grid item md={11}>
        <Grid container spacing={2}>
          <Grid item md={12} sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography variant="body1" color="text.primary" sx={{ marginRight: "10px" }}>
              {data.userHandle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.postedOn}
            </Typography>
          </Grid>
          <Grid item md={12} style={{ paddingTop: "0px" }}>
            <Typography variant="subtitle2" color="text.secondary">
              {data.commentString}
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={5}
            >
              <Grid item>
                <Button>Like</Button><Typography variant="caption">{data.likes}</Typography>
              </Grid>
              <Grid item>
                <Button>Dislike</Button><Typography variant="caption">{data.dislikes}</Typography>
              </Grid>
              <Grid item>
                <Button>Reply</Button>
              </Grid>
            </Grid>
          </Grid>
          {
            data.replyCount > 0
              ? <Grid item md={12} style={{ paddingTop: "0px" }}>
                <Button color="error">View {data.replyCount} replies</Button>
              </Grid>
              : null
          }
        </Grid>
      </Grid>
    </Grid>
  )
}