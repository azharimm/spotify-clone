import React from 'react'
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from '../context/DataLayer'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import './Sidebar.css'

const Sidebar = () => {
    const [{playlists}] = useDataLayerValue()

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

            <strong className="sidebar__title">PLAYLIST</strong>
            <hr />
            {
                playlists?.items?.map(playlist => (
                    <SidebarOption title={playlist.name}/>
                ))
            }
        </div>
    )
}

export default Sidebar
