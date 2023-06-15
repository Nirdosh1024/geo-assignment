import React from "react";

// import components
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

// import components
import ZoomControl from "./zoomControl";

const Zoom = ({ handleZoom }) => {
    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    bottom: "3rem",
                    zIndex: 10000,
                    px: 4,
                    boxSizing: "border-box",
                    width: "100%",
                }}
                display={"grid"}
                gridTemplateColumns={"repeat(3, 1fr)"}
            >
                <Box></Box>

                <Box display="flex" justifyContent="center">
                    <ZoomControl handleZoom={handleZoom}></ZoomControl>
                </Box>

                <Box display="flex" justifyContent="flex-end">
                    <IconButton>
                        <DescriptionIcon sx={{
                            p: 1.25,
                            borderRadius: 1.25,
                            backgroundColor: "primary.main",
                            color: "white.text"
                        }}></DescriptionIcon>
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}

export default Zoom;