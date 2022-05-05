import React, { useState } from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");



  return (
    <>
      <Typography variant='h5' mt={5} mb={3}>
        Create a Post
      </Typography>
      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete='off'>
        <div>
          <TextField onChange={(e) => setTitle(e.target.value)} required id='standard-required' defaultValue='Post Title' variant='standard' />
        </div>
        <div>
          <TextField onChange={(e) => setPostText(e.target.value)} id='outlined-multiline-static' multiline rows={4} defaultValue='Post Detail' />
        </div>
        <div>
          <Button variant='outlined' sx={{ marginTop: ".5rem", borderColor: "black", color: "black" }}>
            Submit
          </Button>
        </div>
      </Box>
    </>
  );
};

export default CreatePost;
