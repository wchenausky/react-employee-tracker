import axios from "axios";

export default {
    getEmployee:function(){
        return axios.get('https://randomuser.me/api/?results=50&inc=picture,name,email,phone,nat&nat=NO');
    }
}