let counter = 0;

const SEARCH_FILTERS = [
    {
        id: ++counter,
        type: "includes",
        selected: false
    },
    {
        id: ++counter,
        type: "author",
        selected: false
    },
    {
        id: ++counter,
        type: "title",
        selected: true
    }
]

export { SEARCH_FILTERS }