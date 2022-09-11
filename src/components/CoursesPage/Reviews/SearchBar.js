import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SearchBar() {
    return (
        <div style={{ display: "flex" }}>
            <form style={{ border: "1px solid black", minWidth: "423px" }}>
                <input
                    type={"text"}
                    name="search"
                    placeholder="Search reviews"
                    style={{
                        border: "none",
                        padding: "0px 20px",
                        height: "36px",
                        width: "380px",
                    }}
                />
                <button
                    type={"submit"}
                    style={{ backgroundColor: "#1C1D1F", height: "40px" }}
                >
                    <SearchRoundedIcon style={{ color: "white" }} />
                </button>
            </form>
            <FormControl
                sx={{ m: 0, minWidth: 120, marginLeft: 4, height: "40px" }}
            >
                <Select
                    value={1}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                >
                    <MenuItem value={1}>All ratings</MenuItem>
                    <MenuItem value={2}>10 ratings</MenuItem>
                    <MenuItem value={3}>100 ratings</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default SearchBar;
