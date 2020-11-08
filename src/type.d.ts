interface ISearchResult{
    id: number | string;
    title?: string;
    name?: string;
    overview: string;
    poster_path?: string;
    video?: boolean;
    runtime?: number;
    release_date: string;
    numOfSeasons?: string;
    revenue?: number
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

