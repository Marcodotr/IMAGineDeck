import DisplayDeck from "../components/DisplayDeck";
import HeroSelect from "../components/HeroSelect";


const routes = [
    {
        path: "/heroselect",
        component: HeroSelect,
        title: "HeroSelect",
    },
    {
        path: "/login",
        component: 'login',
        title: "login",
    },
    {
        path: "/saveddecks",
        component: DisplayDeck,
        title: "allDecks"
    }
]

export default routes