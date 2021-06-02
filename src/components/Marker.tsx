import Link from '@material-ui/core/Link';

import { fetchURL } from '../config.json';

function Marker(props: any) {
  return (
    <div>
     { props.marker.type === 'ad' && <Link href={props.marker.link}>{props.marker.content}</Link> }
     { props.marker.type === 'text' && <p>{props.marker.content}</p> }
     { props.marker.type === 'image' && <img src={`${fetchURL}${props.marker.content}`} width='300'/>}
    </div>
  )
}

export default Marker;
