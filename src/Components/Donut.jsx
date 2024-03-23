import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut,Bar } from 'react-chartjs-2';
function Donut() {
    
    return (
        <div className='-pb-9'>
            <div className='flex flex-col md:justify-around md:flex-row  '>
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
                <div className='w-[400px] '>
                    <Bar
                        id="bar"
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
            <div>
                <h1 className='text-4xl'>Results</h1>
                <p>
                  <label htmlFor="disease_name" className='text-2xl'>Disease Name:{}</label>  
                  <p>
                    
                  </p>
                </p>

              
            </div>
        </div>
    );
}

export default Donut;
