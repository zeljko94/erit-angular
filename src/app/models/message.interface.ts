export interface Message {
    date: string;
    time: string;
    sender: string;
    content: string;
    isPinned?: boolean;
}