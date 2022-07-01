import React, { useState, useEffect } from "react";
import api from "../../Api/Api.js";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Category from "../Category.js";
import { Box, Fab, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Ballot.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const fabStyle = {
  position: "fixed",
  bottom: 20,
  right: 20,
  backgroundColor: "orange",
};

const Ballot = () => {
  const votedCategories = {};
  const [categories, setCategories] = useState([]);
  const [voted, setVoted] = useState(Array(7).fill(null));
  const [open, setOpen] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const handleOpen = () => {
    categories.items.forEach((ele, idx) => {
      votedCategories[ele.title] = voted[idx];
    });
    console.log(votedCategories);

    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    api.getBallotData().then((data) => [setCategories(data)]);
  }, []);

  const handleClick = (title, idx, id) => {
    const updatedVotes = [...voted];
    updatedVotes[idx] = id;
    setVoted(updatedVotes);

    if (!updatedVotes.includes(null)) {
      setCanSubmit(true);
    }
  };

  return (
    <>
      <div className="head-container">
        <Typography variant="h2" gutterBottom component="div" align="center">
          Movie Awards 2021
        </Typography>
        {categories.items?.map((category, idx) => (
          <Category
            voted={voted}
            categoryData={category}
            key={idx}
            idx={idx}
            handleClick={handleClick}
          />
        ))}

        <Fab
          variant="extended"
          size="large"
          disabled={!canSubmit}
          sx={fabStyle}
          onClick={handleOpen}
        >
          Submit
        </Fab>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <IconButton
              onClick={handleClose}
              style={{ position: "fixed", top: "10px", right: "10px" }}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Thank you for voting!
            </Typography>
            <Typography id="modal-modal-description" variant="p">
              Your votes have been recorded, check console to see your votes!
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Ballot;
