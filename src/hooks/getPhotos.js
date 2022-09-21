import { withPhotos } from "@/hoc/withPhotos";
import { useQuery } from "@apollo/client";

export const getPhotos = () => {
  const { loading, error, data } = useQuery(withPhotos);
  return { loading, error, data };
}
