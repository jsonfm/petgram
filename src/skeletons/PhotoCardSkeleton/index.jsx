import { Article, Shimmer } from "./styles";
export { Shimmer };

export const PhotoCardSkeleton = () => {
    return (
        <Article>
            <Shimmer />
            <Shimmer minHeight="40px" borderRadius="5px"/>
        </Article>
    )
}
