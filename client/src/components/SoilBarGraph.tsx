import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


type Sample = {
  id: number;
  N: {
    level: number;
  };
  P: {
    level: number;
  };
  K: {
    level: number;
  };
  temperature:number;
  humidity:number;
  ph:number;
};

// In SoilDataTable component file
type SoilDataBarGraph = {
  sample: Sample;
  // Add other props specific to SoilDataTable component if needed
};

const options: ApexOptions = {
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'bar',
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: '25%',
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: '25%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ['N', 'P', 'K', 'temperature', 'Humidity', 'pH'],
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    fontFamily: 'Satoshi',
    fontWeight: 500,
    fontSize: '14px',

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
  
};

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const SoilBarGraph: React.FC<SoilDataBarGraph>  = ({sample}) => {
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: 'Soil',
        data: [sample.N.level, sample.P.level, sample.K.level, sample.temperature, sample.humidity,sample.ph],
      },
      {
        name: 'Max',
        data: [140, 145, 205, 43.7, 100, 9.94],
      },
    ],
  });

  return (
    <div className="h-full col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4 overscroll-y-auto">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Soil Nutrient Chart
          </h4>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default SoilBarGraph;
