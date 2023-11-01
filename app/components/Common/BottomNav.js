"use client";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";
import BottomNavigation from "@mui/material/BottomNavigation";
import * as React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import BookIcon from "@mui/icons-material/Book";
import Link from "next/link";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      sx={{ width: 320 }}
      value={value}
      onChange={handleChange}
      showLabels
    >
      <BottomNavigationAction
        label="Chat"
        value="recents"
        icon={<ChatIcon />}
      />
      <BottomNavigationAction
        label="Community"
        value="favorites"
        icon={<PeopleIcon />}
      />
      <BottomNavigationAction
        label="Tools"
        value="nearby"
        icon={<BuildCircleIcon />}
      />
      <BottomNavigationAction
        label="Learn"
        value="folder"
        icon={
          <Link href='/learn'>
            <BookIcon />
          </Link>
        }
      />
    </BottomNavigation>
  );
}
