export interface User{
    username: string;
    password: string;
    email: string;
}

export interface UserLogin{
    username: string;
    password: string;
}


export interface UserResponse {
    token: string;
}