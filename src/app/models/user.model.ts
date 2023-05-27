export interface User{
    username: string;
    password: string;
    address: string;
    email: string;
}

export interface UserLogin{
    username: string;
    password: string;
}


export interface UserResponse {
    token: string;
}