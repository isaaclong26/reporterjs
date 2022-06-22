import React,{useEffect, useState} from "react";
import Chart from "react-apexcharts";

const MyChartComponent = ( {data} ) => {
    console.log(data)
    const [currentWeek, setCurrentWeek] = useState([]);
    const [month, setMonth] = useState([]);
    useEffect(()=>{

        const color = (x)=>{
            console.log(x)
            let color
            if(x >=8 ){
                color = "#418f43"
            }
            else{
                color = "#912F40"
            }
            let ots = {
                y:x,
                fillColor: color
            }
            console.log(ots)
            return ots;
          
        }


        let month = data.month
        let week = data.week4
    console.log("chart", data.month);
    setMonth([color(month.projectCost), color(month.conditionOfProduct), color(month.performance), color(month.leadTimes), color(month.response), color(month.completionDate), color(month.install), color(month.accountant)])
    setCurrentWeek([color(week.projectCost), color(week.conditionOfProduct), color(week.performance), color(week.leadTimes), color(week.response), color(week.completionDate), color(week.install), color(week.accountant)])
    },[])

  const options = { 
      
    chart: {
          type: 'bar',
          height: 430
        },
        // plotOptions: {
        //     bar: {
        //       horizontal: true,
        //       dataLabels: {
        //         position: 'top',
        //       },
        //     }
        //   },
        //   stroke: {
        //     show: true,
        //     width: 1,
        //     colors: ['#fff']
        //   },
        //   tooltip: {
        //     shared: true,
        //     intersect: false
        //   },
          xaxis: {
            categories: ["Project Cost", 
            "Condition of Product",
            "Performance",
            "Lead Times"
            , "Responsiveness", 
            "Completion Date"
            , "Shipment/Delivery", 
            "Installation",          
            "Accountant"],
          },
          yaxis: {max:10}
      

     }
     let series = [
         
         {data: month},
         {data: currentWeek}
     ]
     
            console.log(month)

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series= {series}
            type= 'bar'
          />
        </div>
      </div>
    </div>
  );
};

export default MyChartComponent;