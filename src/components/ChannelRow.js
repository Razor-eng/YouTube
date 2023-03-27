import CheckCircleIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { Avatar } from "@mui/material"
import './ChannelRow.css'

function ChannelRow({image,channel,verified,subs,noOfVideos,description}){
    return (
        <div className="channelRow">
            <Avatar src={image} className="channelRow_logo" alt={channel} />
            <div className="channelRow_text">
                <h4>
                    {channel} {verified && <CheckCircleIcon className='CheckCircle'/>}
                </h4>
                <p>
                    {subs} subscribes . {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow