import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function AddProduct() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="mr-10">
      <Button
        onClick={handleOpen}
        className="shadow border  bg-red-500 text-white size-lg py-2 px-4"
      >
        Add Product
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            className="flex justify-center "
          >
            Add Program
          </Typography>
          <div className="flex justify-center gap-5">
            <div className="flex flex-col">
              <Typography id="keep-mounted-modal-description" sx={{ mt: 5 }}>
                <p> Image URL</p>
                <input
                  type="text"
                  placeholder="search"
                  className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                  style={{
                    fontSize: "18pt",
                    height: "42px",
                    width: "300px",
                  }}
                />
                <hr />
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                <p>Name</p>
                <input
                  type="text"
                  placeholder="search"
                  className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                  style={{
                    fontSize: "18pt",
                    height: "42px",
                    width: "300px",
                  }}
                />
                <hr />
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                <p>Total Size</p>
                <input
                  type="text"
                  placeholder="search"
                  className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                  style={{
                    fontSize: "18pt",
                    height: "42px",
                    width: "300px",
                  }}
                />
                <hr />
              </Typography>
            </div>

            <div className="flex flex-col">
              <Typography id="keep-mounted-modal-description" sx={{ mt: 5 }}>
                <p> Price</p>
                <input
                  type="text"
                  placeholder="search"
                  className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                  style={{
                    fontSize: "18pt",
                    height: "42px",
                    width: "300px",
                  }}
                />
                <hr />
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                <p>Category</p>
                <select
                  className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                  style={{
                    fontSize: "18pt",
                    height: "42px",
                    width: "300px",
                  }}
                >
                  <option
                    className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                    style={{
                      fontSize: "18pt",
                      height: "42px",
                      width: "300px",
                    }}
                  >
                    select
                  </option>
                  <option
                    className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                    style={{
                      fontSize: "18pt",
                      height: "42px",
                      width: "300px",
                    }}
                  >
                    Recommended
                  </option>
                  <option
                    className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                    style={{
                      fontSize: "18pt",
                      height: "42px",
                      width: "300px",
                    }}
                  >
                    Popular
                  </option>
                  <option
                    className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                    style={{
                      fontSize: "18pt",
                      height: "42px",
                      width: "300px",
                    }}
                  >
                    Featured
                  </option>
                </select>
                {/* <input type="text" placeholder='search' className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1" style={{fontSize: "18pt",height: "42px",width : "300px"}} /> */}
                <hr />
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
                <p>Type</p>
                <select
                  className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                  style={{
                    fontSize: "18pt",
                    height: "42px",
                    width: "300px",
                  }}
                >
                  <option
                    className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                    style={{
                      fontSize: "18pt",
                      height: "42px",
                      width: "300px",
                    }}
                  >
                    select
                  </option>
                  <option
                    className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                    style={{
                      fontSize: "18pt",
                      height: "42px",
                      width: "300px",
                    }}
                  >
                    Recommended
                  </option>
                  <option
                    className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                    style={{
                      fontSize: "18pt",
                      height: "42px",
                      width: "300px",
                    }}
                  >
                    Popular
                  </option>
                  <option
                    className="w-300 bg-slate-400  focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1"
                    style={{
                      fontSize: "18pt",
                      height: "42px",
                      width: "300px",
                    }}
                  >
                    Featured
                  </option>
                </select>
              </Typography>
            </div>
          </div>

          <div className="flex justify-end gap-8 mt-10">
            <button className="shadow border text-black size-lg py-2 px-2 ">
              Cancel
            </button>
            <button className="shadow border  bg-slate-900 text-white size-lg py-2 px-2">
              {" "}
              Add
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
