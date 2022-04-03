import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  headerTitle: {
    fontWeight: 700,
    fontSize: 24,
    textTransform: "uppercase",
    color: "#FFFFFF",
    maxWidth: 900,
    width: "100%",
    margin: "auto",
    padding: "38px 0",
  },
  headerBackground: {
    background: "#16ABF8",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
});

function Header() {
  const classes = useStyle();

  return (
    <div className={classes.headerBackground}>
      <div className={classes.headerTitle}>To Do List App</div>
    </div>
  );
}

export default Header;
