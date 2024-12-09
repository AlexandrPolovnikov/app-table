import { dataI } from "../store/reducers/table.slice";

export default function removeObject(data: dataI, indexToRemove: number) {
    if (indexToRemove >= 0 && indexToRemove < data.length) {
        const newData: dataI = [...data.slice(0, indexToRemove), ...data.slice(indexToRemove + 1)];

        return newData;
    }

    return data;
}
