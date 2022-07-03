import dashboard from "./assets/dashboardIcon.png"
import withdraw from "./assets/withdrawal.png"
import rate from "./assets/Rate.png"
import history from "./assets/History.png"
import trade from "./assets/Trade.png"
import support from "./assets/Support.png"
import settings from "./assets/Settings.png"

import btc from "./assets/Bitcoin.png"
import eth from "./assets/Ethereum.png"
import lite from "./assets/Litecoin.png"

import sold from "./assets/soldbitcoin.png"
import withdrawal from "./assets/withdraw.png"

export const topLeft = [
    {
        img:dashboard,
        text:"Dashboard",
        active:false
    },
    {
        img:withdraw,
        text:"Withdrawal",
        active:false
    },
    {
        img:rate,
        text:"Rate Calculator",
        active:false
    },
    {
        img:trade,
        text:"Cryto trade History",
        active:false
    },
    {
        img:history,
        text:"Withdrawal History",
        active:false
    }
]

export const bottomLeft = [
    {
        img:support,
        text:"Cryto trade History",
        active:false
    },
    {
        img:settings,
        text:"Cryto trade History",
        active:true
    }
]

export const sell = [
    {
        logo:btc,
        name:"Bitcoin",
        short:"BTC",
        amnt:"26,452.00",
        fiat:"NGN | GHS"
    },
    {
        logo:eth,
        name:"Ethereum",
        short:"ETH",
        amnt:"19,093.93",
        fiat:"NGN | GHS"
    },
    {
        logo:lite,
        name:"Litecoin",
        short:"LTC",
        amnt:"773",
        fiat:"NGN | GHS"
    }
]

export const recent = [
    {
        img:sold,
        time:"July 7",
        name:"Sold Bitcoin",
        account:"FW749374HFHWERHFIWH",
        amount:"0.0042 BTC",
        last:"₦69,000.00"
    },
    {
        img:sold,
        time:"July 1",
        name:"Withdrawal",
        account:"Access Bank",
        amount:"₦500,000",
        last:"0039847384"
    }
]