export interface User {
    id?: number;
    email: string;
    password: string;
    date_created?: string;
}

export interface UserCredentials {
    email: string;
    password: string;
}