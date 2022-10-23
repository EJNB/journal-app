import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { TurnedInNot } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ title = "", body, id, date, imageUrl = [] }) => {
  const dispatch = useDispatch();

  const newTitle = useMemo(
    () => (title.length > 17 ? title.substring(0, 17) + "..." : title),
    [title]
  );

  const handleClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrl }));
  };

  return (
    <ListItem disablePadding onClick={handleClickNote}>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
