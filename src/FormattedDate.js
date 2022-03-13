import React from "react";

export default function FormattedDate(props) {
  let actualDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = actualDay[props.actualDate.getDay()];

  let hour = props.actualDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = props.actualDate.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  return `${day} ${hour}:${minute}`;
}
