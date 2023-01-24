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

const splitString = (text: string) => {
    const textLength = text.length;
    const arrayOfParagraphs = []
    let nextIncrement = 0;
    let prevIncrement = 0;

    while (nextIncrement <= textLength) {
        let periodIndex = text.indexOf(".", nextIncrement);

        if (periodIndex === -1) {
            nextIncrement += 300;
            continue;
        }

        arrayOfParagraphs.push(text.substring(prevIncrement, periodIndex + 1))

        prevIncrement = periodIndex + 2;
        if (periodIndex + 300 > textLength) nextIncrement = periodIndex + 2;
        else nextIncrement = periodIndex + 300;
    }


    return arrayOfParagraphs;
}

export { findSelectedParam, findSelectedFilter, splitString }