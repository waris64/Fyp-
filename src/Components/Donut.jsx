import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut,Bar } from 'react-chartjs-2';
function Donut() {
    return (
        <div className=''>
            <div className='flex justify-around'>
                <div>
                    <Doughnut
                        data={{
                            labels: ['A', 'B', 'C'],
                            datasets: [
                                {
                                    label: 'Citrus Disease Detection',
                                    data: [10, 20, 30]
                                },
                            ],
                        }}
                    />
                </div>
                <div className='h-[900px]'>
                    <Bar
                       
                        data={{
                            labels: ['A', 'B', 'C'],
                            datasets: [
                                {
                                    label: 'Citrus Disease Detection',
                                    data: [10, 20, 90]
                                },
                            ],
                          
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Donut;
