export interface Persona {

        data: {
            LastIp:string,
            LastConnection: string,
            Token: string,
            Next: string,
            Name: string,
            Type: string,
            Profiles: [
                {
                    Profile: string,
                    Description:string,
                    Primary: string
                }
            ]
        },
        success: boolean,
        msg: {
            severity: string,
            message: string,
            code: string
        }
    
} 