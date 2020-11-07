interface ISearchResult{
    name: string;
    overview: string;
    coverImage?: string;
    trailerVideo?: string;
    duration?: number;
    releaseDate: string;
    numOfSeasons?: string;
    revenue?: string
}

interface SearchContextData{
    contentType: string;
    searchTerm: string;
    searchResults: ISearchResult[];
    fetchData: () => void;
    changeContentType: () => void
}

