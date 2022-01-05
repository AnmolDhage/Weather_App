import React from 'react';
import Card from './Card';

function SevenDays(props) {

  function dateConverter(inputDate) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var date = new Date(inputDate * 1000);
    let day = days[date.getDay()];
    let formattedDate = `${day}, ${date.getDate()}`;
    return formattedDate;
  }


  console.log(props.fData);
  return (
    <div>
      <div className="Seven-days">
        <h1 className="daily-title">Daily</h1>
        <div className="Seven-days-cards">
          <Card day={dateConverter(props.fData.day1.dt)}
            logo={ }
            temp="30"
            desc="Sunny"
          />
          <Card day="mon 21"
            logo="o"
            temp="30"
            desc="Sunny"
          />
          <Card day="mon 21"
            logo="o"
            temp="30"
            desc="Sunny"
          />
          <Card day="mon 21"
            logo="o"
            temp="30"
            desc="Sunny"
          />
          <Card day="mon 21"
            logo="o"
            temp="30"
            desc="Sunny"
          />
          <Card day="mon 21"
            logo="o"
            temp="30"
            desc="Sunny"
          />
          <Card day="mon 21"
            logo="o"
            temp="30"
            desc="Sunny"
          />
        </div>

      </div>
    </div>
  )
}
export default SevenDays;
