import { Box, Typography, TextField, Button, Input } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";

import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {
  return (
    <BottomNavigation
      sx={{
        color: "black",
        width: "100%",
        margin: 0,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        // component="form"
        sx={{
          width: "75%",
        }}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={props.value}
          onChange={(e) => props.onChange(e)}
          onKeyDown={(e) => props.onKeyDown(e)}
          sx={{ width: "100%", zIndex: 1000 }}
        />
      </Box>

      <Box>
        <Button
          variant="container"
          sx={{ backgroundColor: "#1B5765", width: "100%" }}
          onClick={props.onSearch}
        >
          <SearchIcon sx={{ color: "white", fontSize: "35px" }} />
        </Button>
      </Box>
    </BottomNavigation>
  );
}
