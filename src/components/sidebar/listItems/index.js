import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import AssignmentIcon from "@material-ui/icons/Assignment";

import { sidebarMainItems, sidebarSecondaryItems } from "./constants";

export const mainListItems = (
  <div>
    {sidebarMainItems.map((item, ind) => (
      <ListItem key={`main-${ind}`} button component="a" href={item.link}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItem>
    ))}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    {sidebarSecondaryItems.map((item, ind) => (
      <ListItem key={`sec-${ind}`} button component="a" href={item.link}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItem>
    ))}
  </div>
);
