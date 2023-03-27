import MenuIcon from "@mui/icons-material/Menu"
import NotificationsIcon from "@mui/icons-material/Notifications"
import VideoCallIcon from "@mui/icons-material/VideoCall"
import AppsIcon from "@mui/icons-material/Apps"
import SearchIcon from "@mui/icons-material/Search"
import "./Header.css"
import { Avatar } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">

            <div className="header_left">
                <MenuIcon />
                <Link to="/">
                    <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
                </Link>
            </div>

            <div className="header_input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="search" />
                </Link>
            </div>

            <div className="header_icons">
                <VideoCallIcon className="icon" />
                <AppsIcon className="icon" />
                <NotificationsIcon className="icon" />
                <Avatar src="https://i.pinimg.com/originals/0e/50/39/0e503918829c61bd24803ce064546cee.jpg" className="hero" alt="" />
            </div>
        </div>
    )
}

export default Header