import { Box, Button, Card, FormControl, IconButton, InputLabel, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles"
// icon imports
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { ReactComponent as UploadIcon } from "../assets/upload.svg";
import { ReactComponent as CircleIcon } from "../assets/circle.svg";
import { ReactComponent as RectangleIcon } from "../assets/rectangle.svg";
import { ReactComponent as HexagonIcon } from "../assets/hexagon.svg";
import { ReactComponent as PolygonIcon } from "../assets/polygon.svg";
import { ReactComponent as ParametersIcon } from "../assets/parameters.svg";
import { ReactComponent as CalendarIcon } from "../assets/calendar.svg";

// date picker imports
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const parametersArray = [
    "Sucrose",
    "Harvest Data",
    "Crop Water Stress",
    "Crop Yield",
    "Barren Land",
    "XYZ",
    "ABC"
];

const useStyles = makeStyles({
    InputField: {
        border: "0.4px solid rgba(255, 255, 255, 0.16)"
    }
})


const Functionality = () => {
    const classes = useStyles()
    const [parameter, setParameter] = useState();
    const handleSelectChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <>
            <Card sx={{
                position: "absolute",
                zIndex: 10000,
                left: "2.5rem",
                top: "8rem",
                width: "30%",
                py: "0.5rem",
                backgroundColor: "secondary.main",
                borderRadius: "18px",
                "@media (min-width: 1440px)": {
                    width: "19%",
                }
            }}>
                <Box sx={{
                    pl: "2rem",
                    pr: "1.625rem",
                    py: "1.125rem",
                    color: "white.text",
                    fontSize: "16px",
                    fontWeight: "600"
                }} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography>Area of Interest</Typography>
                    <IconButton>
                        <KeyboardArrowUpIcon sx={{
                            color: "white.text",
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                            borderRadius: "50%"
                        }} />
                    </IconButton>
                </Box>
                <Card sx={{
                    backgroundColor: "primary.main",
                    borderRadius: "18px",
                    px: "2rem",
                    py: "1.125rem"
                }}>
                    <Box display={"flex"}   alignItems={"center"} sx={{
                        py: "1.5rem",
                        width: "100%",
                        boxSizing: "border-box"
                    }}>
                        <Box className={classes.InputField} sx={{
                            borderRadius: "1000px",
                            pl: "1rem"
                        }}> 
                            <input type="text"  placeholder="Search Location" className="custom-input-field" >
                            </input>
                            <IconButton sx={{
                                color: "white.text",
                                backgroundColor: "#3C4755",
                                borderRadius: "50%",
                                p: "0.75rem",
                                ml: "1rem",
                                "&:hover": {
                                    backgroundColor: "#3C4755"
                                },
                            }}>
                                <SearchIcon />
                            </IconButton>
                        </Box>
                        <IconButton sx={{
                            backgroundColor: "#3C4755",
                            borderRadius: "50%",
                            ml: "0.75rem",
                            p: "1rem",
                            "&:hover": {
                                backgroundColor: "#3C4755"
                            }
                        }}>
                            <UploadIcon />
                        </IconButton>
                    </Box>

                    <Typography sx={{
                        py: "0.5rem",
                        color: "white.text",
                        fontSize: "16px",
                        fontWeight: "500"
                    }}>Draw Boundary</Typography>

                    <Box sx={{
                        color: "rgba(255, 255, 255, 0.21)"
                    }} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                        <Box display={"flex"} alignItems={"center"}>
                            <IconButton>
                                <CircleIcon />
                            </IconButton>

                            <Typography sx={{
                                mx: "0.25rem"
                            }}>|</Typography>

                            <IconButton >
                                <RectangleIcon />
                            </IconButton>

                            <Typography sx={{
                                mx: "0.25rem"
                            }}>|</Typography>

                            <IconButton>
                                <HexagonIcon />
                            </IconButton>

                            <Typography sx={{
                                mx: "0.25rem"
                            }}>|</Typography>

                            <IconButton sx={{
                                backgroundColor: "#2C3847",
                                borderRadius: "50%"
                            }}>
                                <PolygonIcon />
                            </IconButton>
                        </Box>

                        <Typography sx={{
                            color: "white.text",
                            fontSize: "16px",
                            fontWeight: "500"
                        }}>00 Sq. Ft</Typography>
                    </Box>

                    <Box sx={{
                        py: "1.5rem",
                    }} display={"flex"} alignItems={"center"}>
                        <ParametersIcon />
                        <Typography sx={{
                            fontSize: "16px",
                            color: "white.text",
                            fontWeight: "500",
                            ml: "1rem"
                        }}>Parameters</Typography>
                    </Box>

                    <FormControl fullWidth sx={{
                        border: "1px solid rgba(255, 255, 255, 0.65)",
                        borderRadius: "18px",
                        p: "15px",
                        boxSizing: "border-box"
                    }}>
                        <select
                            value={parameter}
                            onChange={handleSelectChange}
                            className="select-parameter"
                        >
                            <option value="" key="placeholder">Select Parameter</option>
                            {parametersArray.map((parameter) => (
                                <option key={parameter} value={parameter} sx={{
                                    color: "white.text",
                                    fontSize: "16px",
                                    fontWeight: "500"
                                }}>
                                    {parameter}
                                </option>
                            ))}
                        </select>
                    </FormControl>

                    <Box sx={{
                        py: "1.5rem",
                    }} display={"flex"} alignItems={"center"}>
                        <CalendarIcon />
                        <Typography sx={{
                            fontSize: "16px",
                            color: "white.text",
                            fontWeight: "500",
                            ml: "1rem"
                        }}>Date</Typography>
                    </Box>

                    <Box display={"flex"} sx={{
                        fontSize: "12px",
                        pb: "1.5rem",
                        color: "rgba(255, 255, 255, 0.65)"
                    }}>
                        <Box display={"flex"} alignItems={"center"}>
                            <Typography>From</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker />
                            </LocalizationProvider>
                        </Box>

                        <Box display={"flex"} alignItems={"center"}>
                            <Typography>To</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs} sx={{
                                color: "white.text"
                            }}>
                                <DatePicker />
                            </LocalizationProvider>
                        </Box>
                    </Box>

                    <Button variant="contained" sx={{
                        backgroundColor: "#4CD159",
                        color: "white.text",
                        borderRadius: "10px",
                        width: "100%",
                        py: "1.125rem",
                        "&:hover": {
                            backgroundColor: "#4CD159"
                        }
                    }}>Continue</Button>


                </Card>
            </Card>
        </>
    )
}

export default Functionality;