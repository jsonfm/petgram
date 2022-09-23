import { getPhoto } from "@/hoc/getPhoto";
import { useQuery } from "@apollo/client";

export const getSinglePhoto = (props = {}) => {
  const { loading, error, data } = useQuery(getPhoto, props);
  return { loading, error, data };
}
