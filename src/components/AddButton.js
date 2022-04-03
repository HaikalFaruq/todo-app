import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  button: {
    background: "#16ABF8",
    borderRadius: 45,
    padding: "13px 21px 13px 14px",
    fontWeight: 600,
    fontSize: 18,
    color: "#FFFFFF",
    border: "none",
  },
});

function AddButton() {
  const classes = useStyle();

  return <button className={classes.button}>+ Tambah</button>;
}

export default AddButton;
