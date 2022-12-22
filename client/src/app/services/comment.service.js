import httpService from "./http.services";
const commentEndpoint = "comment/";

const commentService = {
  createComment: async (payload) => {
    const { data } = await httpService.post(commentEndpoint, payload);
    return data;
  },
  getComments: async (deviceId) => {
    const { data } = await httpService.get(commentEndpoint, {
      params: {
        orderBy: "deviceId",
        equalTo: `${deviceId}`
      }
    });
    return data;
  },
  removeComment: async (commentId) => {
    const { data } = await httpService.delete(commentEndpoint + commentId);
    return data;
  }
};
export default commentService;
