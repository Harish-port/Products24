import { Grid, Typography } from "@mui/material";
import { Budget } from "../../../components/common/AppWidgetSummary/AppWidgetSummary";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const Overview = () => {
  return (
    <>
      <Typography pl={2} fontWeight="bold">
        Page / Overview
      </Typography>
      <Grid container spacing={3} p={2}>
        <Grid item lg={3} sm={6} xs={12}>
          <Budget
            iconBgColor="darkblue"
            icon={<FireTruckIcon />}
            title="Today orders"
            diff={12}
            trend="up"
            sx={{ height: "100%" }}
            value="12"
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Budget
            iconBgColor="green"
            icon={<CurrencyRupeeIcon />}
            title="Today's profit"
            diff={12}
            trend="up"
            sx={{ height: "100%" }}
            value="₹ 24k"
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Budget
            iconBgColor="green"
            icon={<CurrencyRupeeIcon />}
            title="This week profit"
            diff={12}
            trend="up"
            sx={{ height: "100%" }}
            value="₹ 24k"
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Budget
            iconBgColor="green"
            icon={<CurrencyRupeeIcon />}
            title="This month profit"
            diff={12}
            trend="up"
            sx={{ height: "100%" }}
            value="₹ 24k"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Overview;
