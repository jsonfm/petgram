import { withPhotos } from "@/hoc/withPhotos";
import { useQuery } from "@apollo/client";

export const getPhotos = (props = {}) => {
  const { loading, error, data } = useQuery(withPhotos, props);
  return { loading, error, data };
}
