import * as React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../Redux/Customers/Order/Action";
import userEvent from "@testing-library/user-event";
import AddressCard from "../adreess/AdreessCard";
import { useState } from "react";

export default function AddDeliveryAddressForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [selectedAddress, setSelectedAdress] = useState(null);

  // console.log("auth", auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    dispatch(createOrder({ address, jwt, navigate }));
    // after perfoming all the opration
    handleNext();
  };

  const handleCreateOrder = (item) => {
    dispatch(createOrder({ address:item, jwt, navigate }));
    handleNext();
  };

  return (
     <div>
      <Grid
        container
        spacing={4}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        {/* Address Grid */}
        <div className="flex space-x-10">
          <Grid
            xs={12}
            sx={{ width: "400px" }}
            lg={5}
            className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
          >
            <div className="p-5 py-7 border-b cursor-pointer">
              <AddressCard />
              <Button
                sx={{ mt: 2, bgcolor: "RGB(145,85,153)" }}
                size="large "
                variant="contained"
              >
                Deliver Here
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} lg={7} sx={{ width: "700px" }}>
            <Box className="border rounded-s-md shadow-md p-5">
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3} sx={{ alignItems: "center" }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      id="address"
                      name="address"
                      label="Address"
                      fullWidth
                      autoComplete="given-name"
                      // multiline
                      // rows={4}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="state"
                      name="state"
                      label="State/Province/Region"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="zip"
                      name="zip"
                      label="Zip/Postal Code"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Phone Number"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Button
                      sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145,85,153)" }}
                      size="large "
                      variant="contained"
                      type="submit"
                    >
                      Deliver Here
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
