import axios from 'axios'

type ResponseType = {
    data: {
        errorText: string
        info: string
        yourBody: { success: boolean }
        yourQuery: {}
    }
}

export const RequestAPI = {
    updateCheckbox(success: boolean) {
        return axios.post<any, ResponseType, {success: boolean}>('https://neko-cafe-back.herokuapp.com/auth/test', {success})
            .then(response => response.data.info)
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message)
                return error.response.data.errorText
            })
    }
}