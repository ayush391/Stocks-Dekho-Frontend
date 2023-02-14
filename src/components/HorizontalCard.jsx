import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ArrowDownwardRounded, ArrowUpwardRounded } from "@mui/icons-material";
import { Chip } from "@mui/material";

const RedArrow = () => {
  return <ArrowDownwardRounded color="red" />;
};
const GreenArrow = () => {
  return <ArrowUpwardRounded color="green" />;
};

const HorizontalCard = ({ stock, color }) => {
  return (
    <Card variant="outlined" sx={{ width: "200px" }}>
      {" "}
      <React.Fragment>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Typography gutterBottom>
              <Chip
                label={stock.symbol}
                variant="filled"
                size="small"
                sx={{
                  width: "fit-content",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: color,
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              />
            </Typography>
            <Typography variant="h5" component="div">
              {stock.symbol}
            </Typography>
            <Typography variant="h9">
              <b>₹ </b>
              {stock.lastPrice}
            </Typography>
            <Typography variant="p" component="div">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: stock.pChange > 0 ? "#e6f4ea" : "#fce8e6",
                  borderRadius: "5px",
                  padding: "0.5rem 1rem",
                }}
              >
                {stock.pChange}%
                {stock.pChange > 0 ? <GreenArrow /> : <RedArrow />}
              </Box>
            </Typography>
          </Box>
        </CardContent>
      </React.Fragment>
    </Card>
  );
};

export default HorizontalCard;
