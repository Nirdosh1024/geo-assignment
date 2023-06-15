import React from "react";

// mui imports
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

const ZoomControl = ({ handleZoom }) => {

    const handleZoomOut = (e) => {
        handleZoom(-1);
    }

    const handleZoomIn = () => {
        handleZoom(+1);
    }

    return (
        <>
            <IconButton
                onClick={handleZoomIn}
            >
                <AddIcon sx={{
                    p: 0.25,
                    color: "white.text",
                    backgroundColor: "primary.main",
                    borderRadius: "50%",
                }}></AddIcon>
            </IconButton>

            <IconButton
                onClick={handleZoomOut}
            >
                <RemoveIcon sx={{
                    p: 0.25,
                    color: "white.text",
                    borderRadius: "50%",
                    backgroundColor: "primary.main"
                }}></RemoveIcon>
            </IconButton>
        </>
    )
}

export default ZoomControl;