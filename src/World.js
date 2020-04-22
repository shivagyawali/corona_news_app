import React, { useState, useEffect } from "react";

export default function World() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://data.nepalcorona.info/api/v1/world", {
      header: "Content-Type: application/json",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  return (
    <div>
      <h4 className="subheader">World Statistics</h4>
      <ul className="collection center">
        <li class="collection-item ">
          Total Cases : <a className="testedpositive right"> {data.cases}</a>
        </li>
        <li class="collection-item center">
          Today Cases :<a className="testedpositive right">{data.todayCases}</a>
        </li>
        <li class="collection-item center">
          Total Deaths : <a className="testedpositive right">{data.deaths}</a>
        </li>
        <li class="collection-item center">
          Today Deaths :
          <a className="testedpositive right">{data.todayDeaths}</a>
        </li>
        <li class="collection-item center">
          Recovered : <a className="recover right">{data.recovered}</a>
        </li>
        <li class="collection-item center">
          Active : <a className="active right">{data.active}</a>
        </li>
        <li class="collection-item center">
          Critical : <a className="testedpositive right">{data.critical}</a>
        </li>
        <li class="collection-item center">
          Affected Countries :
          <a className="testedpositive right">{data.affectedCountries}</a>
        </li>
      </ul>
    </div>
  );
}
