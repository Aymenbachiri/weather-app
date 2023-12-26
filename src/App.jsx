import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a00d39e18b708f69f402369ffe9db282`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="w-full md:h-screen relative text-[#fff] bg-center bg-cover bg-[url('./assets/sunset.jpg')]">
      <div className="text-center p-4">
        <input
          className="py-3 px-6 text-xl outline-none rounded-3xl border border-[#ffffffcc] bg-[#ffffff1a] placeholder:text-white"
          value={location}
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
        />
      </div>
      <div className="max-w-[700px] h-[700px] m-auto py-0 px-4 relative top-[10%] flex flex-col justify-between">
        <div className="w-full my-4 mx-auto ">
          <div>
            <p>{data.name} </p>
          </div>
          <div>
            {data.main ? <h1> {data.main.temp.toFixed()} °C</h1> : null}
          </div>
          <div className="relative right-[-90%]">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="flex justify-evenly text-center w-full my-4 mx-auto p-4 rounded-xl bg-[#ffffff33]">
          <div>
            {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div>
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div>
            {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
