import axios from "axios";

export default class BaseService {
  constructor() {
    this.client = axios.create({
      baseURL: "https://dpoll.xyz/api/v1/",
      timeout: 1000
    });
  }

  create() {
    throw new Error("This service doesn't support creating entities.");
  }
  update() {
    throw new Error("This service doesn't support updating entities.");
  }
  delete() {
    throw new Error("This service doesn't support deleting entities.");
  }
  all() {
    throw new Error("This service doesn't implement fetch.");
  }
  find() {
    throw new Error("This service doesn't implement find.");
  }

  get count() {
    return 0;
  }

  get next() {
    return null;
  }

  get previous() {
    return null;
  }
}
