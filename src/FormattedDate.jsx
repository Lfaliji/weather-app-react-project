import React from "react";
import moment from "moment-timezone";
import tzlookup from "tz-lookup";

export default function FormattedDate(props) {
  let timezone = tzlookup(
    props.coordinates.latitude,
    props.coordinates.longitude,
  );

  return <div>{moment(props.date).tz(timezone).format("dddd HH:mm")}</div>;
}
