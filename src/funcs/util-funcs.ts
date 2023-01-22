interface TypeData {
    id: number,
    type: string,
    selected: boolean;
}

type typesArray = {
    id: number;
    type: string;
    selected: boolean;
}[]


const findSelectedParam = (typesArray: typesArray) => {
    return typesArray.reduce((type: string, typeData: TypeData) => {
        if (typeData.selected && typeData.type !== "includes") type = `in${typeData.type}`;
        return type;
    }, "")
}

const findSelectedFilter = (typesArray: typesArray) => {
    return typesArray.reduce((type: string, typeData: TypeData) => {
        if (typeData.selected) type = typeData.type;
        return type;
    }, "")
}

export { findSelectedParam, findSelectedFilter }