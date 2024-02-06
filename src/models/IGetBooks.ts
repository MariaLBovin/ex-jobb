export interface IGetBooks {
    subject: string
}
export interface IGetBook{
    extractedTitle: string;
    author: string
}
export interface IGetAllBooks{
    subjects: string[]
}
export interface IGetBookWithId {
    bookIDs: string[]
}