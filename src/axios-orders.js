import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-burger-builder-2344e-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

export default instance