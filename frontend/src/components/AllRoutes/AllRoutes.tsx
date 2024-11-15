import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "../Error404/Error404";
import UserDeposit from "../../pages/UserDeposit/UserDeposit";
import UserWithdraw from "../../pages/UserWithdraw/UserWithdraw";
import UserTransactions from "../../pages/UserTransactions/UserTransactions";
import Dashboard from "../../pages/Dashboard/Dashboard";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/deposit" element={<UserDeposit />} />
      <Route path="/withdraw" element={<UserWithdraw />} />
      <Route path="/transactions" element={<UserTransactions />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AllRoutes;
