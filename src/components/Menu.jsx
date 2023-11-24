import React from "react";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="img">
        <img
          id="logo"
          src="https://desk.assiduus.in/content/images/2023/08/Assiduus_TM_Logo--1-.png"
          alt="Assiduus_TM_Logo--1-.png"
        />
      </div>
      <ul>
        <li>
          <span class="material-symbols-outlined">dashboard</span>
          <p>Dashboard</p>
        </li>
        <li>
          <span class="material-symbols-outlined">deployed_code_account</span>
          <p>Accounts</p>
        </li>
        <li>
          <span class="material-symbols-outlined">attach_money</span>
          <p>Payroll</p>
        </li>
        <li>
          <span class="material-symbols-outlined">lab_profile</span>
          <p>Reports</p>
        </li>
        <li>
          <span class="material-symbols-outlined">person</span>
          <p>Advisor</p>
        </li>
        <li>
          <span class="material-symbols-outlined">contact_page</span>
          <p>Contacts</p>
        </li>
      </ul>
    </div>
  );
};
