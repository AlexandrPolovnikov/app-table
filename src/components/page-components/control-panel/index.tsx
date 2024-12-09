import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import classes from "./control-panel.module.scss";
import { selectTableSlice, setState } from "../../../store/reducers/table.slice";
import removeObject from "../../../utils/remove-column";

export default function ControlPanel() {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector(selectTableSlice);

    function addColumn() {
        const newColumnName = `column${Math.random()}`;
        const newRows = data.map((row) => ({ ...row, [newColumnName]: "" }));
        dispatch(
            setState({
                data: newRows,
            }),
        );
    }
    function addRow() {
        const newRow = Object.keys(data[0]).reduce((acc, column) => ({ ...acc, [column]: "" }), {});
        dispatch(
            setState({
                data: [...data, newRow],
            }),
        );
    }

    function removeRow(index: number) {
        const updatedRows = data.filter((_, i) => i !== index);

        dispatch(
            setState({
                rows: updatedRows,
            }),
        );
    }

    return (
        <div className={`${classes.control} content column`}>
            <button className={classes.button} onClick={() => addColumn()}>
                Добавить столбец
            </button>
            <button className={classes.button} onClick={addRow}>
                Добавить строку
            </button>
            <button
                className={classes.button}
                onClick={() => {
                    let updData = removeObject(data, data.length - 1);
                    dispatch(
                        setState({
                            data: updData ? updData : data,
                        }),
                    );
                }}>
                Удалить столбец
            </button>
            <button
                className={classes.button}
                onClick={() => {
                    removeRow(data.length - 1);
                }}>
                Удалить последнюю строку
            </button>
        </div>
    );
}
