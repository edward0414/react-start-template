import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";

export const linkToHeader = {
  "/dashboard": "Dashboard",
  "/orders": "Orders",
  "/customers": "Customers",
  "/reports": "Reports",
  "/integrations": "Integrations"
};

export const sidebarMainItems = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard"
  },
  {
    label: "Orders",
    icon: <ShoppingCartIcon />,
    link: "/orders"
  },
  {
    label: "Customers",
    icon: <PeopleIcon />,
    link: "/customers"
  },
  {
    label: "Reports",
    icon: <BarChartIcon />,
    link: "/reports"
  },
  {
    label: "Integrations",
    icon: <LayersIcon />,
    link: "/integrations"
  }
];

export const sidebarSecondaryItems = [
  {
    label: "Current month",
    link: "#"
  },
  {
    label: "Last quarter",
    link: "#"
  },
  {
    label: "Year-end sale",
    link: "#"
  }
];
