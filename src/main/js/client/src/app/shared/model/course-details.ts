export class CourseDetails {

    courseLink: string;
    thumbnailLink: string;
    title: string;
    authors: string[];
    description: string;
    rating: {
        avg: number,
        votesNumber: number;
    };
    tags: string[];
}