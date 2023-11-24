import React from "react";
import { Invoice } from "./Invoice";
import { CheckingAccound } from "./CheckingAccound";
import { TotalCashFlow } from "./TotalCashFlow";
import { AccountWatchlist } from "./AccountWatchlist";

export const HomePage = () => {
  return (
    <div>
      <div className="titleBar">
        {/* <div>
          <img
            id="logo"
            src="https://desk.assiduus.in/content/images/2023/08/Assiduus_TM_Logo--1-.png"
            alt="Assiduus_TM_Logo--1-.png"
          />
        </div> */}
        <div className="userSection">
          <div className="search">
            <span class="material-symbols-outlined">search</span>
            <input type="text" />
          </div>
          <span class="material-symbols-outlined">notifications</span>
          <span class="material-symbols-outlined">sentiment_neutral</span>

          <div>
            <select></select>
          </div>
        </div>
      </div>
      <div className="svg-container">
        <CheckingAccound />
        <Invoice />
        <TotalCashFlow />
        <AccountWatchlist />
      </div>
    </div>
  );
};
