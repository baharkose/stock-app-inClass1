import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globalStyles";
import { TextField } from "@mui/material";
import useStockCalls from "../service/useStockCalls";

export default function FirmModal({ open, handleClose, info, setInfo }) {
  const { postStock, putStock } = useStockCalls();

  // handle close olunca verileri temizledik ki kullanıcı çıkış yapmadan da tekrar girmek isteğinde veriler temizlenmiş olsun o nedenle info bilgilerini bir üst statee taşıdık.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });

    // setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    // post işlemi yaptıktan sonra kapatma isteği at, isteği attıktan sonra setInfoyu boşalt.
    // nereye ve neyi

    if (info._id) {
      postStock("firms", info);
    } else {
      putStock("firms", info);
    }

    handleClose();
  };

  console.log(info);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Firm Name*"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
            />
            <TextField
              label="Phone*"
              name="phone"
              id="phone"
              type="text"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
            />
            <TextField
              label="Address*"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
            />
            <TextField
              label="Image*"
              name="image"
              id="image"
              type="url"
              //   http adresi olacağı için url olması lazım
              variant="outlined"
              value={info.image}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" size="large">
              {" "}
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
