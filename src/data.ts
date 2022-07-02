import dashboard from "./assets/dashboardIcon.png"
import withdraw from "./assets/withdrawal.png"
import rate from "./assets/Rate.png"
import history from "./assets/History.png"
import trade from "./assets/Trade.png"
import support from "./assets/Support.png"
import settings from "./assets/Settings.png"

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