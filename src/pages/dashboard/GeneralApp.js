import { Box, Stack } from "@mui/material";
import React from "react";
import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

//Dynamic import. Wrapped by Suspense below
// {const Cat = lazy(() => import("../../components/Cat"))}

const GeneralApp = () => {
  const theme = useTheme();
  //Access store inside this component, specific sidebar.
  const { sidebar } = useSelector((store) => store.app);

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* import Chats component */}
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
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
      {sidebar.open && (() => {
        switch (sidebar.type) {
          case "CONTACT":
            return <Contact />;
            
          case "STARRED":
            return <StarredMessages />;
          
          case "SHARED":
            return <SharedMessages />;
            
        
          default:
            break;
        }
      })()}

    </Stack>
  );
};

export default GeneralApp;
