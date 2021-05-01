import axios from "axios";

export default {
  getEmployee: function () {
    return axios.get(
      "https://randomuser.me/api/?inc=picture,name,email,phone,nat&results=15&nat=US"
    );
  },
};
