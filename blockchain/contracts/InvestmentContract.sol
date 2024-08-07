// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InvestmentContract {
     
    struct InvestmentData {
        string  fund;
        string  investmentType;
    }

    string public name = "priyanshu";

    InvestmentData[] public investments;

    constructor() {
        investments.push(InvestmentData('53,642,630.05', 'Assets Under Management'));
        investments.push(InvestmentData('47,390,696.35', 'Distributed to Investors'));
        investments.push(InvestmentData('14.91%', 'Average monthly yield'));
        investments.push(InvestmentData('966', 'Active Users'));
    }

    function getInvestment(uint index) public view returns (string memory, string memory) {
        InvestmentData memory investment = investments[index];
        return (investment.fund, investment.investmentType);
    }

    function getInvestmentCount() public view returns (uint) {
        return investments.length;
    }
}
