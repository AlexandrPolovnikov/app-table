import { dataI } from "../store/reducers/table.slice";

export default function downloadJSON(data: dataI) {
    let downloadData = JSON.stringify(data);
    const fileName = "myfile.json";

    const blob = new Blob([downloadData], { type: "application/json" });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;

    link.click();

    window.URL.revokeObjectURL(url);
}
