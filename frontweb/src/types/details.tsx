import { Genre } from "./genre";

export type Details= {
    id: string,
    title: string,
    subTitle: string,
    year: string,
    imgUrl: string,
    synopsis:  string;
    genre: Genre
}