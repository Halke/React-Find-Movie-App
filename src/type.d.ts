interface ISearchResult{
    id: Number;
    title?: string;
    name?: string;
    overview: string;
    poster_path?: string;
    video?: boolean;
    runtime?: Number;
    release_date: string;
    numOfSeasons?: string;
    revenue?: BigInt
}

interface SearchContextData{
    contentType: string;
    searchTerm: string;
    searchResults: ISearchResult[];
    searchOnFocus: boolean;
    fetchData: () => void;
    changeContentType: (changeTo: string) => void;
    changeSearchTerm: (newSearchTerm: string) => void;
    changeSearchOnFocus: () => void
}

