import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { category } from "../constant/category";
import { fetchData } from "../../redux/Data/action";
import { useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

export default function TemporaryDrawer() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleChange = (id) => {
    console.log({ id });
    dispatch(fetchData(id));
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {category.map(
          (value, id) => (
            console.log(value),
            (
              <ListItem
                key={value.id}
                onClick={() => handleChange(value.id)}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText primary={value.value} />
                </ListItemButton>
              </ListItem>
            )
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        edge="start"
        onClick={toggleDrawer(true)}
        sx={{
          mr: 2,
          color: "white",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
