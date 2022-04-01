export interface Entry {
    id: string,
    type: string,
    raw: string,
    title: string,
    author?: string,
    booktitle?: string,
    publisher?: string,
    year?: string | number,
    month?: string,
    pages?: string,
    journal?: string,
    num?: string | number,
    volume?: string,
    doi?: string,
    issn?: string,
    url?: string,
    urldate?: string,
    language?: string,
    copyright?: string,
    note?: string,
    keyword?: string,
    abstract?: string
}

export declare namespace BibtexParser {
    function parseToJSON(input: string): [Entry];

    function parseToJSONString(input: string): string;

}
