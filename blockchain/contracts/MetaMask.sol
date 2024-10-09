// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InvestmentPlatform {
    address public owner;

    struct Deposit {
        uint256 amount;
        uint256 timestamp;
    }

    struct WithdrawalRequest {
        uint256 amount;
        uint256 timestamp;
        bool processed;
    }

    mapping(address => Deposit[]) public deposits;
    mapping(address => WithdrawalRequest[]) public withdrawalRequests;

    uint256 public totalDeposits;
    uint256 public totalWithdrawals;
    uint256 public totalProfit;

    uint256 public depositWindowStart = 24; // 24th of the month
    uint256 public depositWindowEnd = 31; // End of the month

    event DepositMade(address indexed user, uint256 amount);
    event WithdrawalRequested(address indexed user, uint256 amount);
    event WithdrawalProcessed(address indexed user, uint256 amount);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier onlyDuringDepositWindow() {
        uint256 day = (block.timestamp / 1 days) % 30 + 1;
        require(
            day >= depositWindowStart && day <= depositWindowEnd,
            "Deposits are only allowed during the deposit window."
        );
        _;
    }

    modifier onlyDuringWithdrawalWindow() {
        uint256 day = (block.timestamp / 1 days) % 30 + 1;
        require(
            day >= 1 && day <= 5,
            "Withdrawals can only be requested between the 1st and 5th."
        );
        _;
    }

    constructor() {
        owner = msg.sender;
        emit OwnershipTransferred(address(0), owner);
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "New owner is the zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    function deposit() external payable onlyDuringDepositWindow {
        deposits[msg.sender].push(Deposit(msg.value, block.timestamp));
        totalDeposits += msg.value;
        emit DepositMade(msg.sender, msg.value);
    }

    function requestWithdrawal(uint256 amount) external onlyDuringWithdrawalWindow {
        require(getBalance(msg.sender) >= amount, "Insufficient balance.");
        withdrawalRequests[msg.sender].push(WithdrawalRequest(amount, block.timestamp, false));
        emit WithdrawalRequested(msg.sender, amount);
    }

    function processWithdrawal(address user, uint256 index) external onlyOwner {
        WithdrawalRequest storage request = withdrawalRequests[user][index];
        require(!request.processed, "Withdrawal already processed.");
        require(address(this).balance >= request.amount, "Insufficient contract balance.");

        request.processed = true;
        totalWithdrawals += request.amount;
        payable(user).transfer(request.amount);
        emit WithdrawalProcessed(user, request.amount);
    }

    function distributeProfit() external payable onlyOwner {
        require(msg.value > 0, "No profit to distribute.");
        totalProfit += msg.value;
    }

    function getBalance(address user) public view returns (uint256) {
        uint256 balance = 0;
        for (uint256 i = 0; i < deposits[user].length; i++) {
            balance += deposits[user][i].amount;
        }
        for (uint256 i = 0; i < withdrawalRequests[user].length; i++) {
            if (!withdrawalRequests[user][i].processed) {
                balance -= withdrawalRequests[user][i].amount;
            }
        }
        return balance;
    }

    function getDepositHistory(address user) public view returns (Deposit[] memory) {
        return deposits[user];
    }

    function getWithdrawalHistory(address user) public view returns (WithdrawalRequest[] memory) {
        return withdrawalRequests[user];
    }
}
