import { createContext } from "react";

const searchContext = createContext({
    searchWord: '',
    setSearchWord: (word) => {}
});

export default searchContext;