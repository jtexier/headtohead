import Grid from '@mui/material/Grid';
import Player from './Player.js';
import { useQuery } from "@apollo/client";
import { PLAYERS } from '../lib/ApolloClient';

const PlayerList = () => {
    const { loading, error, data } = useQuery(PLAYERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Sorry, something went wrong :(</p>;
    return (<Grid container spacing={2}>
     { data.headToHead.map(player => <Player key={player.shortname} player={player} />) }
    </Grid>);
}

export default PlayerList;