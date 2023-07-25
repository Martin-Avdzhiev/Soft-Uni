export interface Register{
    email: string;
    username: string;
    password: string;
}

export interface Login{
    username: string;
    password: string;
}

export interface Profile{
    created_at: string;
    email: string;
    updatedAt: string;
    username: string;
    _id: string;
}