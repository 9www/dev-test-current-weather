import { connectApi } from "@api/apiManagement";
import { ENDPOINTS } from "@api/endpoint";

export async function getCurrentWeather() {
  return await connectApi({
    method: "GET",
    url: ENDPOINTS.WEATHER,
  });
}
