import axios from "azios"
\
export defaut{
    getEmployee:function(){
        return axios.get('https://randomuser.me/api/?results=50&inc=picture,name,email,phone,nat&nat=NO');
    }
}