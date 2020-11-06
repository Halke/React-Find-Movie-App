interface ISearch {
    coverImage?: string;
    trailerVideo?: string;
    name: string;
    overview: string;
    releaseDate: string;
    genre: string;
    revenue: string;
    duration: string
}
  
type SearchState = {
    contentType: string;
    searchTerm: string;
    results: ISearch[]
}
  
type SearchAction = {
    type: string;
    contentType: string;
    searchTerm: string;
    results: IArticle
}
  
type DispatchType = (args: SearchAction) => SearchAction