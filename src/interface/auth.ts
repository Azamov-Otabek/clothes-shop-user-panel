export interface ForgotPassword {
    email: string
}

export interface Login{
    email: string | undefined,
    password: string | undefined,
}

export interface Register{
    email: string | undefined,
    password:  string | undefined,
    first_name:  string | undefined,
    gender:  string | undefined,
    last_name:  string | undefined,
}

export interface ResetPassword{
    email: string
    new_password: string
    otp: string
}

export interface TokenRefresh{
    refresh: string
}

export interface VerifyCode{
    email: string
    otp: string
}



export interface Request{
    Login: (payload:Login) => any,
    Register: (data:Register) => any,
    ForgotPassword: (data:ForgotPassword) => any,
    ResetPassword: (data:ResetPassword) => any,
    RefreshToken: (data:TokenRefresh) => any,
    VerifyCode: (data:VerifyCode) => any,
    createUser: (data: Register) => any,
}