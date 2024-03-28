import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut, Bar } from 'react-chartjs-2';
import jsPDF from 'jspdf';

function Donut() {
    const handlePrint = () => {
        const doc = new jsPDF();
        doc.text('Results', 10, 10);
        doc.text('Disease Name: Citrus Canker', 10, 20);
        const ulContent = [
            "Citrus canker is a bacterial infection affecting citrus trees.",
            "It causes characteristic lesions on leaves, stems, and fruit.",
            "Lesions often appear as raised, corky areas surrounded by water-soaked margins.",
            "The disease spreads rapidly through wind-driven rain, insects, and contaminated  tools.",
            "Infected trees may experience defoliation, premature fruit drop, and overall decline in health.",
            "Management strategies include pruning infected plant parts, applying copper-based sprays, and implementing quarantine measures.",
            "Preventive measures such as planting disease-resistant citrus varieties, practicing proper sanitation, and monitoring for early signs of infection can help mitigate the impact of citrus canker."
        ];
        ulContent.forEach((item, index) => {
            doc.text(`${index + 1}. ${item}`, 10, 30 + index * 10);
        });
        doc.save('results.pdf');
    };

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
            <div className='shadow-2xl lg:ml-9 lg:px-16  boder-2 lg:w-[93vw] lg:pt-16 lg:mt-9 rounded-lg lg:pb-10  lg:border-b-4'>
                <h1 className='lg:text-4xl lg:m-auto flex  lg:justify-center lg:pb-8 underline '>Results</h1>
                <p className='flex lg:flex-col lg:justify-center lg:pl-56 lg:pb-7'>
                    <label htmlFor="disease_name" className='lg:text-2xl lg:pb-3'>Disease Name: Citrus Canker</label>
                    <ul className='text-left pl-8 list-disc lg:text-wrap'>
                        <li>Citrus canker is a bacterial infection affecting citrus trees.</li>
                        <li>It causes characteristic lesions on leaves, stems, and fruit.</li>
                        <li>Lesions often appear as raised, corky areas surrounded by water-soaked margins.</li>
                        <li>The disease spreads rapidly through wind-driven rain, insects, and contaminated tools.</li>
                        <li>Infected trees may experience defoliation, premature fruit drop, and overall decline in health.</li>
                        <li>Management strategies include pruning infected plant parts, applying copper-based sprays, and implementing quarantine measures.</li>
                        <li>Preventive measures such as planting disease-resistant citrus varieties, practicing proper sanitation, and monitoring for early signs of infection can help mitigate the impact of citrus canker.</li>
                    </ul>
                </p>
                <button onClick={handlePrint} className='lg:ml-[35rem] lg:p-2 lg:rounded lg:border-2 '>Generate Report</button>
            </div>
        </div>
    );
}

export default Donut;
