import {useQuery} from '@apollo/client';
import {useEffect, useState} from 'react';

import {GET_CHART_DATA} from '../graphql/chart';

export type TChartData = {
  timestamp: number;
  value: number;
};

export const useChart = () => {
  const {data, loading} = useQuery(GET_CHART_DATA, {
    pollInterval: 60000,
  });

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data) {
      const normalizeChartData = data.getCoinGeckoPrices.map(
        (_chartData: TChartData) => ({
          timestamp: _chartData.timestamp,
          value: _chartData.value,
        }),
      );

      setTimeout(function () {
        setChartData(normalizeChartData);
      }, 250);
    }
  }, [data]);

  return {chartData, loading};
};
