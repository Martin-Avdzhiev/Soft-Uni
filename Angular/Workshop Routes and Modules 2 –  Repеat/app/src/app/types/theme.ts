import { UserId } from "./user-id";
export interface Theme {
    themeName: string;
    subscribers: string[];
    userId: UserId;
    posts: string[];
    created_at: string;
    updatedAt: string;
    __v: number;
}