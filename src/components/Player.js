import {formatHeight, formatWeight, lastGames} from '../lib/Utils';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const Player = ({player}) => {
    const {wins,losses} = lastGames(player.stats.last);
    const fullname = `${player.firstname} ${player.lastname}`;
    return (
    <Grid item xs={3}>
    <Avatar alt={fullname} src={player.picture.url} sx={{ width: 56, height: 56 }} />    
    {fullname}
    <ul>
      <li>rank: {player.stats.rank}</li>
      <li>points: {player.stats.points}</li>
      <li>weight (kg): {formatWeight(player.stats.weight)}</li>
      <li>height (m): {formatHeight(player.stats.height)}</li>
      <li>age: {player.stats.age}</li>
      <li>last games: {wins} wins / {losses} losses</li>
    </ul>
  </Grid>  
)}

export default Player;