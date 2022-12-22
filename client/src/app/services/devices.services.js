import httpService from "./http.services";

const deviceEndpoint = "device";

const deviceService = {
  get: async () => {
    const { data } = await httpService.get(deviceEndpoint);
    return data;
  }
};

export default deviceService;
