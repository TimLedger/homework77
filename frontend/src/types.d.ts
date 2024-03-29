export interface MessageApi {
    id: string;
    author: string;
    message: string;
    image: string | null;
}
  
export interface Message {
    author: string;
    message: string;
    image: File | null;
}