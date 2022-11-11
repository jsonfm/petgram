import { Grid, Image } from "./styles";

export const ListOfFavs = ({ favs }) => {
    if(!favs) return null;
    return (
        <Grid>
            {favs.map(fav => (
                <Image
                    src={fav.src}
                />
            ))}
        </Grid>
    )
}
