import React, { useEffect } from "react";

export const Invoice = () => {
  useEffect(() => {
    const data = [
      { x: "Older", y: 10 },
      { x: "Jan 01-08", y: 15 },
      { x: "Jan 09-16", y: 30 },
      { x: "Jan 17-24", y: 20 },
      { x: "Jan 25-31", y: 25 },
      { x: "Future", y: 20 },
    ];

    const svg = d3.select("#invoice");

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
    <div className="invoice">
      <div className="invoiceHeading">
        <p>Invoices owed to you</p>
        <div>
          <button>New Sales Invoice</button>
        </div>
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <svg id="invoice" width="500" height="300"></svg>
      </div>
    </div>
  );
};
