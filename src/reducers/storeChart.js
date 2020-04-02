import { STORE_CHART, ADD_PROPERTIES } from '../types';

const initialState = {
 chart: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STORE_CHART:
      return {
        ...state,
        chart: action.payload
      }
    case ADD_PROPERTIES:
      const chart = state.chart.nodes;
      const updatedChart = state.chart;
      Object.keys(chart).forEach(function(key) {
        if (parseInt(key) === parseInt(action.id)) {
          chart[key].properties.value = action.payload;
        }
      })
      updatedChart.nodes = chart;
      return {
        chart: updatedChart
      }
    default: 
      return state;
  }
}
