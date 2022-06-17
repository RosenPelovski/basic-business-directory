import axios from "axios";
export function getData() {
  return axios
    .get("https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f")
    .then(({ data }) => {
      //handle success 
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}