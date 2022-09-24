import React, { useEffect } from "react";
import { useEvents } from "src/services/useEvents";

const Events = () => {
  const { getRaceEvents } = useEvents();

  useEffect(() => {
    getRaceEvents();
  }, []);
  return <>Events</>;
};

export default Events;
