let counter = 0;

const SEARCH_PARAMS = [
    {
        id: ++counter,
        type: "includes",
        displayTitle: "Includes",
        selected: false,
    },
    {
        id: ++counter,
        type: "author",
        displayTitle: "Author",
        selected: false
    },
    {
        id: ++counter,
        type: "title",
        displayTitle: "Title",
        selected: true
    }
]

const FILTER_TYPE = [
    {
        id: ++counter,
        type: "",
        displayTitle: "None",
        selected: true
    },
    {
        id: ++counter,
        type: "full",
        displayTitle: "Full text",
        selected: false
    },
    {
        id: ++counter,
        type: "partial",
        displayTitle: "Partial text",
        selected: false
    },
    {
        id: ++counter,
        type: "ebooks",
        displayTitle: "eBooks",
        selected: false
    },
    {
        id: ++counter,
        type: "free-ebooks",
        displayTitle: "Free",
        selected: false
    }
];

export { SEARCH_PARAMS, FILTER_TYPE }