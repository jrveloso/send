import { Box, Stack } from "@mui/material";
import React from "react";
import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";

//Dynamic import. Wrapped by Suspense below
// {const Cat = lazy(() => import("../../components/Cat"))}

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* import Chats component */}
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 740px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        {/** Convertation*/}
        <Conversation />
      </Box>
      {/* Contact */}
      <Contact />
    </Stack>
  );
};

export default GeneralApp;
