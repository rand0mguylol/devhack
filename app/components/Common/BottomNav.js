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
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from "next/navigation";
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    router.push(newValue)
  };
  return (
    <BottomNavigation
      sx={{ width: '100%' }}
      value={value}
      onChange={handleChange}
      showLabels
    >
      <BottomNavigationAction
        label="Consult"
        value="/consult"
        icon={<ChatIcon />}
      />
      <BottomNavigationAction
        label="Community"
        value="/community"
        icon={<PeopleIcon />}
      />
       <BottomNavigationAction
        label="Home"
        value="/"
        icon={
            <HomeIcon />
        }
      />
      <BottomNavigationAction
        label="Merchant"
        value="/merchant"
        icon={<StorefrontIcon />}
      />
      <BottomNavigationAction
        label="Learn"
        value="/learn"
        icon={
            <BookIcon />
        }
      />
    </BottomNavigation>
  );
}
