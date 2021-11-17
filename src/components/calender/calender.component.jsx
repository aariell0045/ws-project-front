import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as Handler from "./handler.js";
import * as CONTENTS from "./constents.js";
import "./calender.styles.css";
function Calender({ events, setEvents }) {
  const [yearSlider, setYearSlider] = useState(new Date().getFullYear());
  const [monthSlider, setMonthSlider] = useState(new Date().getMonth() + 1);
  const [calenderTemplate, setCalenderTemplate] = useState(
    CONTENTS.CALENDER_TEMPLATE
  );
  const userId = useSelector((state) => state.userReducer.userId);

  useEffect(() => {
    const newClaenderTemplate = Handler.calenderTemplateFun(
      calenderTemplate,
      monthSlider,
      yearSlider
    );
    setCalenderTemplate(newClaenderTemplate);
    (async (userId) => {
      const allEvents = await Handler.fetchAllEvents(userId);
      setEvents(allEvents);
    })(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sliderMove = Handler.monthsSlider(
    monthSlider,
    setMonthSlider,
    calenderTemplate,
    yearSlider,
    setYearSlider
  );

  return (
    <div className="calander">
      <div className="calander-date">
        <p
          onClick={() => {
            const newClaenderTemplate = sliderMove(-1);
            setCalenderTemplate(newClaenderTemplate);
          }}
          className="home-page-left-arrow"
        >
          left
        </p>
        <p className="home-page-date-content">
          {CONTENTS.CALENDER_MONTHS[monthSlider - 1]} {yearSlider}
        </p>
        <p
          onClick={() => {
            const newClaenderTemplate = sliderMove(1);
            setCalenderTemplate(newClaenderTemplate);
          }}
          className="home-page-left-arrow"
        >
          right
        </p>
      </div>
      <div className="week-days-warpper">
        <div className="week-days">
          {CONTENTS.DAYS.map((day, index) => {
            return (
              <p key={index} className="day">
                {day}
              </p>
            );
          })}
        </div>
      </div>
      <div className="dates-list">
        <div className="calender-component">
          <div className="calender-container">
            {calenderTemplate.map((week, wIndex) => {
              return (
                <div key={wIndex} className="week-days">
                  {week.map((day, dIndex) => {
                    return (
                      <div
                        key={wIndex + dIndex}
                        style={{ visibility: day ? "inherit" : "hidden" }}
                        className="calender-cube"
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Calender);
