import React, { useEffect } from "react";

export const TotalCashFlow = () => {
  useEffect(() => {
    const data = [
      { x: "August", y: 20 },
      { x: "September", y: 30 },
      { x: "October", y: 40 },
      { x: "November", y: 30 },
      { x: "December", y: 30 },
      { x: "January", y: 40 },
    ];

    const svg = d3.select("#totalCash");

    const barWidth = 20;
    const barPadding = 10;

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.x))
      .range([0, 500])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y)])
      .range([250, 0]);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.x) + (xScale.bandwidth() - barWidth) / 2)
      .attr("y", (d) => yScale(d.y))
      .attr("width", barWidth)
      .attr("height", (d) => 250 - yScale(d.y))
      .attr("fill", "green")
      .attr("rx", 5) // Rounded corners
      .attr("ry", 5); // Rounded corners

    // Hide x-axis line
    svg
      .select(".x-axis")
      .select(".tick")
      .selectAll("line")
      .attr("display", "none");

    // Adjust x-axis labels and position
    svg
      .append("g")
      .attr("transform", `translate(0, 250)`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .style("text-anchor", "center")
      .attr("dx", "-0.8em")
      .attr("dy", "0.15em");
  }, []);
  return (
    <div className="totalCash">
      <div className="totalCashHeading">
        <p>Total Cash flow</p>
        <div style={{ display: "flex" }}>
          <ul className="in-out">
            <li> In</li>
            <li>Out</li>
          </ul>
        </div>
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <svg id="totalCash" width="500" height="300"></svg>
      </div>
    </div>
  );
};
