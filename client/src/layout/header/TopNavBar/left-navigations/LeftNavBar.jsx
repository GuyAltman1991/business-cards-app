import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routesModel";

const LeftNavBar = () => {
  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem to={ROUTES.ABOUT} label="about" />

        <NavItem to={ROUTES.MY_CARDS} label="my cards" />
        <NavItem to={ROUTES.FAV_CARDS} label="Fav Cards" />
        <NavItem to={ROUTES.SANDBOX} label="Sandbox" />
      </Box>
    </Box>
  );
};

export default LeftNavBar;
