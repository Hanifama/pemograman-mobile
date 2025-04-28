import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/material';

const ChartComponent: React.FC = () => {
  return (
    <Box sx={{ width: '100%', height: 290, backgroundColor: '#f9fafb', }}>
      <BarChart
        series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        height={290}
        xAxis={[{ data: ['Kecantikan', 'Elektronik', 'Makanan & Minuman', 'Fashion'], scaleType: 'band' }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </Box>
  );
};

export default ChartComponent;
