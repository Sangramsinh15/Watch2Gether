/**
 * Component Name: Chart Component
 * Usage: This is used for plotting chart in the UI.
 *
 */

import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Grid } from "@mui/material";
import chartTransformation from "../../transformation/_chartTransformation";

let chartConfig = {};
/**
 * This component is to popluate the charts using data passed using props.
 * It returns the highcharts component with the chart options
 */
const ChartComp = (props) => {
  const { data, seasonRatings, id } = props;
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    chartConfig = chartTransformation(data, seasonRatings, id);
    setChartOptions(Object.assign({}, chartConfig));
  }, [data, id, seasonRatings]);

  return (
    <Grid>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Grid>
  );
};
/**
 * The component is being exported as ChartComp 
 * so that this component can be imported into other modules.
 */
export default ChartComp;
