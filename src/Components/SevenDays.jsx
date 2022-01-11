import React, { useState } from 'react';
import Card from './Card';
import { Carousel } from 'react-bootstrap';


function SevenDays(props) {

  let [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  if (width <= 550 && width > 375) {
    return (
      <div className="Seven-days">
        <h1 className="daily-title">Daily</h1>
        <Carousel interval={5000}>
          <Carousel.Item>

            <div className="Seven-days-cards">
              <Card
                day={props.fData.day1.dt}
                logo={props.fData.day1.logId}
                tempMin={props.fData.day1.tempMin}
                tempMax={props.fData.day1.tempMax}
                desc={props.fData.day1.main}
              />
              <Card
                day={props.fData.day2.dt}
                logo={props.fData.day2.logId}
                tempMin={props.fData.day2.tempMin}
                tempMax={props.fData.day2.tempMax}
                desc={props.fData.day2.main}
              />
            </div>

          </Carousel.Item>

          <Carousel.Item>
            <div className="Seven-days-cards">
              <Card
                day={props.fData.day3.dt}
                logo={props.fData.day3.logId}
                tempMin={props.fData.day3.tempMin}
                tempMax={props.fData.day3.tempMax}
                desc={props.fData.day3.main}
              />
              <Card
                day={props.fData.day4.dt}
                logo={props.fData.day4.logId}
                tempMin={props.fData.day4.tempMin}
                tempMax={props.fData.day4.tempMax}
                desc={props.fData.day4.main}
              />
            </div>

          </Carousel.Item>

          <Carousel.Item>

            <div className="Seven-days-cards">
              <Card
                day={props.fData.day5.dt}
                logo={props.fData.day5.logId}
                tempMin={props.fData.day5.tempMin}
                tempMax={props.fData.day5.tempMax}
                desc={props.fData.day5.main}
              />
              <Card
                day={props.fData.day6.dt}
                logo={props.fData.day6.logId}
                tempMin={props.fData.day6.tempMin}
                tempMax={props.fData.day6.tempMax}
                desc={props.fData.day6.main}
              />
            </div>

          </Carousel.Item>

          <Carousel.Item>

            <div className="Seven-days-cards">
              <Card
                day={props.fData.day7.dt}
                logo={props.fData.day7.logId}
                tempMin={props.fData.day7.tempMin}
                tempMax={props.fData.day7.tempMax}
                desc={props.fData.day7.main}
              />
            </div>

          </Carousel.Item>

        </Carousel>
      </div>
    )
  } else if (width <= 375) {
    return (
      <div className="Seven-days">
        <h1 className="daily-title">Daily</h1>
        <Carousel interval={5000}>
          <Carousel.Item>

            <div className="Seven-days-cards">
              <Card
                day={props.fData.day1.dt}
                logo={props.fData.day1.logId}
                tempMin={props.fData.day1.tempMin}
                tempMax={props.fData.day1.tempMax}
                desc={props.fData.day1.main}
              />
            </div>

          </Carousel.Item>

          <Carousel.Item>

            <div className="Seven-days-cards">
              <Card
                day={props.fData.day2.dt}
                logo={props.fData.day2.logId}
                tempMin={props.fData.day2.tempMin}
                tempMax={props.fData.day2.tempMax}
                desc={props.fData.day2.main}
              />
            </div>

          </Carousel.Item>

          <Carousel.Item>

            <div className="Seven-days-cards">
              <Card
                day={props.fData.day3.dt}
                logo={props.fData.day3.logId}
                tempMin={props.fData.day3.tempMin}
                tempMax={props.fData.day3.tempMax}
                desc={props.fData.day3.main}
              />
            </div>

          </Carousel.Item>

          <Carousel.Item>

            <div className="Seven-days-cards">
              <Card
                day={props.fData.day4.dt}
                logo={props.fData.day4.logId}
                tempMin={props.fData.day4.tempMin}
                tempMax={props.fData.day4.tempMax}
                desc={props.fData.day4.main}
              />
            </div>

          </Carousel.Item>

          <Carousel.Item>

            <div className="Seven-days-cards">
              <Card
                day={props.fData.day5.dt}
                logo={props.fData.day5.logId}
                tempMin={props.fData.day5.tempMin}
                tempMax={props.fData.day5.tempMax}
                desc={props.fData.day5.main}
              />
            </div>

          </Carousel.Item>

          <Carousel.Item>

            <div className="Seven-days-cards">
              <Card
                day={props.fData.day6.dt}
                logo={props.fData.day6.logId}
                tempMin={props.fData.day6.tempMin}
                tempMax={props.fData.day6.tempMax}
                desc={props.fData.day6.main}
              />
            </div>

          </Carousel.Item>

          <Carousel.Item>

            <div className="Seven-days-cards">
              <Card
                day={props.fData.day7.dt}
                logo={props.fData.day7.logId}
                tempMin={props.fData.day7.tempMin}
                tempMax={props.fData.day7.tempMax}
                desc={props.fData.day7.main}
              />
            </div>

          </Carousel.Item>

        </Carousel>
      </div>
    )
  } else {
    return (
      <div>
        <div className="Seven-days">
          <h1 className="daily-title">Daily</h1>

          <div className="Seven-days-cards">
            <Card
              day={props.fData.day1.dt}
              logo={props.fData.day1.logId}
              tempMin={props.fData.day1.tempMin}
              tempMax={props.fData.day1.tempMax}
              desc={props.fData.day1.main}
            />
            <Card
              day={props.fData.day2.dt}
              logo={props.fData.day2.logId}
              tempMin={props.fData.day2.tempMin}
              tempMax={props.fData.day2.tempMax}
              desc={props.fData.day2.main}
            />
            <Card
              day={props.fData.day3.dt}
              logo={props.fData.day3.logId}
              tempMin={props.fData.day3.tempMin}
              tempMax={props.fData.day3.tempMax}
              desc={props.fData.day3.main}
            />
            <Card
              day={props.fData.day4.dt}
              logo={props.fData.day4.logId}
              tempMin={props.fData.day4.tempMin}
              tempMax={props.fData.day4.tempMax}
              desc={props.fData.day4.main}
            />
            <Card
              day={props.fData.day5.dt}
              logo={props.fData.day5.logId}
              tempMin={props.fData.day5.tempMin}
              tempMax={props.fData.day5.tempMax}
              desc={props.fData.day5.main}
            />
            <Card
              day={props.fData.day6.dt}
              logo={props.fData.day6.logId}
              tempMin={props.fData.day6.tempMin}
              tempMax={props.fData.day6.tempMax}
              desc={props.fData.day6.main}
            />
            <Card
              day={props.fData.day7.dt}
              logo={props.fData.day7.logId}
              tempMin={props.fData.day7.tempMin}
              tempMax={props.fData.day7.tempMax}
              desc={props.fData.day7.main}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default SevenDays;
