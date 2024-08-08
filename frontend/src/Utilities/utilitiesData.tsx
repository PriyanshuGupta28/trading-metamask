import { cardDetailsTypes } from "./types";

export const CardData: cardDetailsTypes[] = [
    {
        fund: '53,642,630.05',
        investmentType: 'Assets Under Management'
    },
    {
        fund: '47,390,696.35',
        investmentType: 'Distributed to Investors'
    },
    {
        fund: '14.91%',
        investmentType: 'Average monthly yield'
    },
    {
        fund: '966',
        investmentType: 'Active Users'
    },
]

export const UserDepositCardData: cardDetailsTypes[] = [
    {
        fund: '100',
        investmentType: "Account Balance"
    },
    {
        fund: '200',
        investmentType: "Total Deposited"
    },
    {
        fund: '300',
        investmentType: "Monthly Returns"
    },
    {
        fund: '400',
        investmentType: "Total Returns"
    },
]
export const UserWithdrawCardData: cardDetailsTypes[] = [
    {
        fund: '100',
        investmentType: "Account Balance"
    },
    {
        fund: '200',
        investmentType: "Total Withdraw"
    },
    {
        fund: '300',
        investmentType: "Pending Withdraw"
    },
    {
        fund: '400',
        investmentType: "Total Fees"
    },
]