import { cardDetailsTypes } from "./types";

export const CardData: cardDetailsTypes[] = [
    {
        fund: '53,642,630.05',
        type: 'Assets Under Management'
    },
    {
        fund: '47,390,696.35',
        type: 'Distributed to Investors'
    },
    {
        fund: '14.91%',
        type: 'Average monthly yield'
    },
    {
        fund: '966',
        type: 'Active Users'
    },
]

export const UserDepositCardData: cardDetailsTypes[] = [
    {
        fund: '100',
        type: "Account Balance"
    },
    {
        fund: '200',
        type: "Total Deposited"
    },
    {
        fund: '300',
        type: "Monthly Returns"
    },
    {
        fund: '400',
        type: "Total Returns"
    },
]
export const UserWithdrawCardData: cardDetailsTypes[] = [
    {
        fund: '100',
        type: "Account Balance"
    },
    {
        fund: '200',
        type: "Total Withdraw"
    },
    {
        fund: '300',
        type: "Pending Withdraw"
    },
    {
        fund: '400',
        type: "Total Fees"
    },
]