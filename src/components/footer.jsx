import React from "react";

// imports from material ui
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Footer = ({ center }) => {
    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    zIndex: 10000,
                    width: "100%",
                    boxSizing: "border-box",
                    py: 0.5,
                    px: 4,
                    bottom: 0,
                    backgroundColor: "primary.main",
                    color: "white.text",
                    fontFamily: "Red Hat Display",
                    fontSize: 0.75,
                }}
                display={"grid"}
                gridTemplateColumns={"repeat(3, 1fr)"}
            >
                <Typography>Powered By AgriAI</Typography>
                <Typography align="center">
                    Lat: {center[0]},Lng: {center[1]} | 100 m
                </Typography>
                <Typography></Typography>
            </Box>
        </>
    )
}

export default Footer;