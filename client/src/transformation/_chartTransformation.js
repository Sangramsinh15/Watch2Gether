/**
 * Function: Chart Transformation.
 * Usage: This transforms the data to the format required for chart plotting
 */

import options from "../components/Chart/chartOptions";
import merge from "lodash/merge";

const chartTransformation = (apiData, seasonRatings) => {
  const chartOptions = Object.assign({}, options);
  const data = apiData.data;
  let finalChartConfig = {};
  let series = [];

  let chartObject = Object.assign(
    {},
    {
      xAxis: {
        categories: [],
        title: {
          text: "",
        },
      },
    }
  );

  // If media is a movie than the chart labels would be according to movie name.
  // If media is a tv show than the x-axis label should be seasons/episodes
  if (!(data.media_type === "tv")) {
    series.push({ data: [data.vote_average] });
    chartObject.series = series;
    chartObject.xAxis.categories.push(data.original_title);
    chartObject.xAxis.title.text = "Movie";
  } else {
    // const xAxisCategories = seasonRatings.map(
    //   (rating, index) => `Season ${index + 1}`
    // );

    const xAxisCategories = [];
    for (let i = 0; i < seasonRatings.length; i++) {
      xAxisCategories.push(`Season ${i + 1}`);
    }
    chartObject = {
      xAxis: {
        categories: [...xAxisCategories],
        title: {
          text: "Seasons",
        },
      },
    };
    series.push({ data: seasonRatings });
    chartObject.series = series;
  }
  finalChartConfig = merge(chartObject, chartOptions);

  return finalChartConfig;
};
/**
 * The transformation is being exported as chartTransformation 
 * so that this transfromation can be imported into other modules.
 */
export default chartTransformation;
