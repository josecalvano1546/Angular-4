export interface tokenModel{
        success: boolean,
        data: {
        authToken: string,
        encryptAPI: boolean
        },
        msg: {
            severity: string,
            message: string,
            code: string,
        }

}