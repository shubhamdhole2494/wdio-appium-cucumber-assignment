import supertest, { Response } from "supertest";

const request = supertest("");

class RequestAPI {
  /*
    Make a GET request call API method
    */
  async makeGETCall(endpoint: string, payload?: object, headers?: any) {
    if (payload && headers)
      return request.get(endpoint).set(headers).send(payload);
    else if (payload) return request.get(endpoint).send(payload);
    else return request.get(endpoint);
  }
  /*
    Make a POST request call method
    */
  async makePOSTCall(
    endpoint: string,
    payload: string | object,
    headers?: any
  ) {
    if (headers) return request.post(endpoint).set(headers).send(payload);
    return request.post(endpoint).send(payload);
  }

  /*
    Make a DELETE request call method
    */
  async makeDELETECall(endpoint: string, payload?: object) {
    if (payload) return request.delete(endpoint).send(payload);
    return request.delete(endpoint);
  }
}

export default new RequestAPI();
