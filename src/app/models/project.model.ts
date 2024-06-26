export interface Project {
    id: number;
    titleHeading: string;
    titleSubheading: string;
    previewImg: string;
    logo: string;
    client: string;
    type: string;
    year: number;
    role: string;
    projectDescription: string;
    projectRoleDescription: string;
    images: string[];
    isologo: string;
    link: string;
    titleBegin: string;
    titleEnd: string;
}

export interface JsonResponse {
    works2023: Project[];
    works2022: Project[];
}