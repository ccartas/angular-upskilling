export interface NavigationEntry {
    label: string;
    navigationPath: string;
    selected: boolean;
}

export interface User {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
}

export interface UserData {
    user_id: string;
    firstName: string;
    lastName: string;
    username: string;
    token: string;
}