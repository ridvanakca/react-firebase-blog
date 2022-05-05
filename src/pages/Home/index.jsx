import React, { useState, useEffect } from "react";
import { database } from "../../firebase.config";
import { collection, getDocs, doc, deleteDoc } from "@firebase/firestore";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { auth } from "../../firebase.config";

const Home = ({ isAuth }) => {
  const [postsList, setPostsList] = useState([]);

  const postsCollectionRef = collection(database, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  async function deletePost(id) {
    const postDoc = doc(database, "posts", id);
    await deleteDoc(postDoc);
  }

  return (
    <>
      {postsList.map((post) => {
        return (
          <Box key={post.id} mt={5} component='div' sx={{ p: 2, border: "1px solid black" }}>
            <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} variant='h5'>
              {post.title}{" "}
              {isAuth && post.author.id === auth.currentUser.uid && (
                <IconButton onClick={() => deletePost(post.id)} aria-label='delete'>
                  <DeleteIcon />
                </IconButton>
              )}
            </Typography>
            <Typography variant='subtitle1'>{post.postText}</Typography>
            <Typography variant='subtitle1'>Author: {post.author.name}</Typography>
          </Box>
        );
      })}
    </>
  );
};

export default Home;
