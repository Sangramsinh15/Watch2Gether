//Constant to declare the visual options for the charts
const options = {
  title: {
    text: "Visualization",
    style: {
      color: "#E0E0E3",
    },
  },
  chart: {
    backgroundColor: "transparent",
  },
  legend: {
    itemStyle: { color: "#E0E0E3" },
  },
  xAxis: {
    categories: [],
    labels: {
      style: {
        color: "#E0E0E3",
      },
    },
    lineColor: "#707073",
    tickColor: "#707073",
  },
  yAxis: {
    labels: {
      style: {
        color: "#E0E0E3",
      },
    },
    title: {
      text: "Rating",
    },
  },
  series: [
    {
      name: "Average votes",
      data: [],
    },
  ],
};
/**
 * The component is being exported as options 
 * so that this component can be imported into other modules.
 */
export default options;
