import { 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemSecondaryAction, 
  ListItemText, 
  Avatar, 
  IconButton
} from '@material-ui/core';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

type Props = {
  name: string,
  id: string,
  playEpisode: Function
}

function EpisodeListItem(props: Props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AudiotrackIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
        />
        <ListItemSecondaryAction>
          <IconButton 
            edge="end" 
            aria-label="play"
            onClick={() => {props.playEpisode(props.id)}}
          >
            <PlayCircleFilledWhiteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
}

export default EpisodeListItem;
