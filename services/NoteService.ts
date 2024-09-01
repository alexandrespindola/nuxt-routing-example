export default class NoteService {
    private base_uri: string = "/api";
  
    public async getNote() {
      const uri = `${this.base_uri}/notes`;
      const rawResponse = await fetch(uri, {
        method: "GET",
      });
      const response = await rawResponse.json();
      return response;
    }
  }