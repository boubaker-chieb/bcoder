// Story model interface
export interface StoryModel {
    id: string;
    title: string;
    content: string;
    tags: string[];
    imageBase64: string;
    createdAt: Date;
    updatedAt?: Date;
    likes?: number;
    views?: number;
    contentType?: string; // e.g., 'image/png', 'image/jpeg'
}