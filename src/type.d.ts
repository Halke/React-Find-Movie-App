interface ISearchResult{
    id: Number;
    title: string;
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
    fetchData: () => void;
    changeContentType: () => void;
    changeSearchTerm: (newSearchTerm: string) => void
}

