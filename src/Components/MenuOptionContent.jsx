import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import PropTypes from 'prop-types'
import { IsMenuOptionClickedContext } from "../context";
import AddAccount from './MenuOptionsContent/AddAccount'
import MyProfile from './MenuOptionsContent/MyProfile'
import NewGroup from './MenuOptionsContent/NewGroup'
import Contacts from './MenuOptionsContent/Contacts'
import Calls from './MenuOptionsContent/Calls'
import PeopleNearby from './MenuOptionsContent/PeopleNearby'
import SavedMessages from './MenuOptionsContent/SavedMessages'
import Settings from './MenuOptionsContent/Settings'
import InviteFriends from './MenuOptionsContent/InviteFriends'
import TelegramFeatures from './MenuOptionsContent/TelegramFeatures'

export default function MenuOptionContent({menuOptions}){

    const { isMenuOptionClicked, closeClikedMenuOption} = useContext(IsMenuOptionClickedContext)

    return(

        <>  
            <div className={`absolute text-dark-text w-full h-full bg-dark-primary p-5 ${isMenuOptionClicked ? `left-0` : `left-[100vw]`}`}>
                <button onClick={closeClikedMenuOption}><FaArrowLeft /></button>
                <div className="flex justify-center items-center">
                    {menuOptions.addAccount && <AddAccount />}
                    {menuOptions.myProfile && <MyProfile />}
                    {menuOptions.newGroup && <NewGroup />}
                    {menuOptions.contacts && <Contacts />}
                    {menuOptions.calls && <Calls />}
                    {menuOptions.peopleNearby && <PeopleNearby />}
                    {menuOptions.savedMessages && <SavedMessages />}
                    {menuOptions.settings && <Settings />}
                    {menuOptions.inviteFriends && <InviteFriends />}
                    {menuOptions.telegramFeatures && <TelegramFeatures />}</div>
            </div>
        </>
    )
}

MenuOptionContent.propTypes = {
    menuOptions: PropTypes.shape({
        addAccount: PropTypes.bool.isRequired,
        myProfile: PropTypes.bool.isRequired,
        newGroup: PropTypes.bool.isRequired,
        contacts: PropTypes.bool.isRequired,
        calls: PropTypes.bool.isRequired,
        peopleNearby: PropTypes.bool.isRequired,
        savedMessages: PropTypes.bool.isRequired,
        settings: PropTypes.bool.isRequired,
        inviteFriends: PropTypes.bool.isRequired,
        telegramFeatures: PropTypes.bool.isRequired,
    }).isRequired,
};