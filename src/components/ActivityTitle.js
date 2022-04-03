import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  title: {
    fontWeight: 700,
    fontSize: 36,
    color: "#111111",
  },
});

function ActivityTitle() {
  const classes = useStyle();

  return <div className={classes.title}>Activity</div>;
}

export default ActivityTitle;
