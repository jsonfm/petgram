import { Grid, Image } from "./styles";

export const ListOfFavs = ({ favs }) => {
    if(!favs) return null;
    return (
        <Grid>
            {favs.map(({ src }) => <Image src={src} />)}
        </Grid>
    )
}
