import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import {Link} from 'react-router-dom';
import CustomTextField from "./CustomTextField";
import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
    // console.log(countries);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    // console.log(subdivisions);
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
    // console.log(countries);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    console.log(options);
    setShippingOptions(options);
        if (options[0]){
            setShippingOption(options[0].id);
        }
    // console.log(countries);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => {
            next({...data, shippingCountry, shippingSubdivision, shippingOption})
        })}>
          <Grid container spacing={3}>
            <CustomTextField required name="firstName" label="First name" />
            <CustomTextField required name="lastName" label="Last name" />{" "}
            <CustomTextField required name="address1" label="Address" />{" "}
            <CustomTextField required name="email" label="Email" />{" "}
            <CustomTextField required name="City" label="City" />{" "}
            <CustomTextField required name="ZIP" label="ZIP / Postal Code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {Object.entries(shippingCountries)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((country) => {
                    return (
                      <MenuItem key={country.id} value={country.id}>
                        {country.label}
                      </MenuItem>
                    );
                  })}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select
                value={shippingSubdivision}
                fullWidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {Object.entries(shippingSubdivisions)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((subdivision) => {
                    return (
                      <MenuItem key={subdivision.id} value={subdivision.id}>
                        {subdivision.label}
                      </MenuItem>
                    );
                  })}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                value={shippingOption}
                fullWidth
                onChange={(e) => setShippingOption(e.target.value)}
              >
                {shippingOptions
                  .map((sOption) => ({
                    id: sOption.id,
                    label: `${sOption.description} - ${sOption.price.formatted_with_symbol}`,
                  }))
                  .map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}

              
              </Select>
            </Grid>
          </Grid>

          <br />
          <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Button variant="outlined" component={Link} to="/cart">Back to Cart</Button>
                    <Button type="submit" variant="contained" color="primary">Next</Button>

          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
