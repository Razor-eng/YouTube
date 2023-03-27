import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import './SearchPage.css';

const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className="filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image="https://yt3.googleusercontent.com/-45nJ_SwOTKNICeL3jD0LaAIHZ4le8ak4AeuzMOr_z5Qzt1q2TR2rqkG-X9byVRzfhrV4b5LHvo=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Rajat"
            verified
            subs="3M"
            noOfVideos={20}
            description="Welcome to Rajat's Official YouTube Channel. A Web-Developer trying to improve his skills making new projects."
            />
            <hr />
        </div>
    )
}

export default SearchPage