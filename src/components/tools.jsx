import React from "react";

// import svgs from assets
import { ReactComponent as Coinstack } from '../assets/coins.svg';
import { ReactComponent as Piechart } from '../assets/piechart.svg';
import { ReactComponent as Cubes } from "../assets/cubes.svg";
import { ReactComponent as Book } from "../assets/book.svg";
import { ReactComponent as User } from "../assets/user.svg";

// material ui imports
import { Box, IconButton, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';

const Tools = () => {
    return (
        <>
        <Box sx={{
            position: "absolute",
            zIndex: 10000,
            p: "2rem",
            width: "100%",
            boxSizing: "border-box"
        }} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Box>
                <IconButton sx={{
                    "&:hover": {
                        backgroundColor: "transparent"
                    },
                    mr: "1.5rem"
                }}>
                    <SearchIcon sx={{
                        borderRadius: "18px",
                        p: "1.125rem",
                        backgroundColor: "primary.main",
                        color: "white.text",
                        "&:hover": {
                            backgroundColor: "secondary.main"
                        }
                    }}></SearchIcon>
                </IconButton>
                <IconButton sx={{
                    backgroundColor: "primary.main",
                    borderRadius: "18px",
                    p: "1.125rem",
                    mr: "0.75rem",
                    "&:hover": {
                        backgroundColor: "secondary.main"
                    }
                }}>
                    <Coinstack/>
                </IconButton>
                <IconButton sx={{
                    backgroundColor: "primary.main",
                    borderRadius: "18px",
                    p: "1.125rem",
                    ml: "0.75rem",
                    "&:hover": {
                        backgroundColor: "secondary.main"
                    }
                }}>
                    <Piechart />
                </IconButton>
                <IconButton sx={{
                    "&:hover": {
                        backgroundColor: "transparent"
                    },
                    ml: "1.5rem"
                }}>
                <HistoryIcon sx={{
                        borderRadius: "18px",
                        p: "1.125rem",
                        backgroundColor: "primary.main",
                        color: "white.text",
                        "&:hover": {
                            backgroundColor: "secondary.main"
                        }
                    }}></HistoryIcon>
                </IconButton>
            </Box>

            <Box>
                <IconButton sx={{
                    backgroundColor: "primary.main",
                    borderRadius: "18px",
                    p: "1.125rem",
                    mr: "0.75rem",
                    "&:hover": {
                        backgroundColor: "secondary.main"
                    }
                }}>
                    <Cubes />
                </IconButton>
                <IconButton sx={{
                    backgroundColor: "primary.main",
                    borderRadius: "18px",
                    p: "1.125rem",
                    ml: "0.75rem",
                    mr: "0.75rem",
                    "&:hover": {
                        backgroundColor: "secondary.main"
                    }
                }}>
                    <Book />
                </IconButton>
                <IconButton sx={{
                    backgroundColor: "primary.main",
                    borderRadius: "18px",
                    p: "1.125rem",
                    ml: "0.75rem",
                    "&:hover": {
                        backgroundColor: "secondary.main"
                    }
                }}>
                    <Typography sx={{
                        color: "white.text",
                        pl: "1rem",
                        pr: "1.625rem",
                        fontSize: "15px"
                    }}>Jagriti Dabas</Typography>
                    <User />
                </IconButton>
            </Box>
        </Box>
        </>
    )
}

export default Tools;