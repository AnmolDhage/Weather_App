import React from 'react';
import Card from './Card';

function SevenDays(props) {
  return (

    <div style={{ border: '1px solid' }}>
      <div className="Seven-days">
        <h1 className="daily-title">Daily</h1>
        <div className="Seven-days-cards">
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