// Story model interface
export interface StoryModel {
    id: string;
    title: string;
    content: string;
    tags: string[];
    image: string;
    createdAt: Date;
    updatedAt?: Date;
    likes?: number;
    views?: number;
}