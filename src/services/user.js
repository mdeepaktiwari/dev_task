import {apiAxios} from "./api";
import {USER_INFO_URL} from "./constant";

export async function getUserInformation() {
  const data = await apiAxios.get(USER_INFO_URL);
  return data;
}
