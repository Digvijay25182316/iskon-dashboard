"use client";
import React, { useEffect, useState } from "react";

function DateFormater({ date }: { date: any }) {
  const [formatted, setIsFormatted] = useState("");
  console.log(new Date().toUTCString());
  useEffect(() => {
    const newDate = date?.split("T")[0];
    setIsFormatted(newDate);
  }, [date]);
  return <div className="w-max">{formatted}</div>;
}

export default DateFormater;
