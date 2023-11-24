import React, { useEffect } from "react";

export const CheckingAccound = () => {
  useEffect(() => {
    const data = [
      { x: "9", y: 2 },
      { x: "10", y: 3 },
      { x: "11", y: 5 },
      { x: "12", y: 4 },
      { x: "13", y: 3 },
      { x: "14", y: 4 },
      { x: "15", y: 3 },
      { x: "16", y: 2 },
      { x: "17", y: 3 },
      { x: "18", y: 4 },
    ];

    const svg = d3.select("#checking_account");

    const line = d3
      .line()
      .x((d, i) => i * 50)
      .y((d) => 250 - d.y * 30)
      .curve(d3.curveCardinal);

    svg
      .append("path")
      .datum(data)
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 2);

    // Creating x-axis with visible tick marks and labels
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.x))
      .range([0, 480])
      .padding(0.1);

    svg
      .append("g")
      .attr("transform", "translate(0, 250)")
      .call(d3.axisBottom(xScale).tickSize(5))
      .selectAll("text")
      .attr("text-anchor", "end");
  }, []);
  return (
    <div className="checkingAccount">
      <div className="checkingAccountHeading">
        <p>Checking account</p>
        <div>
          <select>
            <option>Manage</option>
          </select>
          <select>
            <option>January</option>
          </select>
        </div>
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <svg id="checking_account" width="500" height="300"></svg>
      </div>
    </div>
  );
};
