import React, { useState, useEffect } from "react";

export default function Nepal() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://nepalcorona.info/api/v1/data/nepal", {
      header: "Content-Type: application/json",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  return (
    <div>
      <h3 className="subheader text-center">Nepal Statistics</h3>
      <ul className="collection ">
        <li class="collection-item center">
          Tested Positive :
          <a className="testedpositive right">{data.tested_positive}</a>
        </li>
        <li class="collection-item center">
          Tested Negative :
          <a className="testednegative right">{data.tested_negative}</a>
        </li>
        <li class="collection-item center">
          Tested Total :<a className="total right">{data.tested_total}</a>
        </li>
        <li class="collection-item center">
          In Isolation : <a className="right"> {data.in_isolation}</a>
        </li>
        <li class="collection-item center">
          Pending Result : <a className="right"> {data.pending_result}</a>
        </li>
        <li class="collection-item center ">
          Recovered : <a className="recover right"> {data.recovered}</a>
        </li>
        <li class="collection-item align">
          Deaths: <a className="death right "> {data.deaths}</a>
        </li>
      </ul>
    </div>
  );
}
