import { useState, useEffect, createContext } from "react";
import axios from "axios";
import CalendarUI from "./components/CalendarUI";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Dropdown from "./components/Dropdown";

export const AppContext = createContext(null);

function App() {
  const [holidays, setHolidays] = useState([]);
  const [country, setCountry] = useState("");

  /*If this URL does not work, kindly write your own key from after 'api_key' to before &country*/

  const URL = `https://calendarific.com/api/v2/holidays?&api_key=H7ws3GAgyALomJzicRTM6S0uWMgjpjry&country=${country}&year=2023`;

  useEffect(() => {
    if (country) {
      axios
        .get(URL)
        .then((res) => setHolidays(res.data.response.holidays))
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [URL, country]);

  const events = holidays.map((item) => ({
    title: item.name,
    start: new Date(item.date.iso),
    end: new Date(item.date.iso),
  }));

  return (
    <AppContext.Provider value={{ country, setCountry }}>
      <div>
        <Dropdown />
        <CalendarUI events={events} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
