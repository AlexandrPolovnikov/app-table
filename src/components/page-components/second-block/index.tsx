import classes from "./second-block.module.scss";
import { dataI, selectTableSlice, setState } from "../../../store/reducers/table.slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import React, { ChangeEvent, useEffect, useState } from "react";
import ColumnCard from "../../UI/column-card";
import ValueCard from "../../UI/column-card";
import replaceKeys from "../../../utils/edit";
import editRow from "../../../utils/erit-row";

export default function SecondBlock() {
    const { data } = useAppSelector(selectTableSlice);
    const dispatch = useAppDispatch();

    return (
        <div className={`${classes.content} row`}>
            <div className={`${classes.starting_column} row`}>
                <div
                    className={`${classes.column} column`}
                    style={{ gridTemplateColumns: `repeat(${Object.keys(data[0]).length}, 1fr)` }}>
                    {Object.keys(data[0]).map((key, index) => (
                        <ValueCard
                            key={`${key}__${index}`}
                            value={key}
                            editValue={(value) => {
                                let updData = replaceKeys(key, value, data);
                                dispatch(
                                    setState({
                                        data: updData,
                                    }),
                                );
                            }}
                        />
                    ))}
                </div>
                <div className={classes.border}></div>
                {data &&
                    Array.isArray(data) &&
                    data.map((rows, index) => {
                        return (
                            <div key={`${rows}__${index}`} className={`${classes.row} row `}>
                                <div
                                    className={`${classes.column} column `}
                                    style={{
                                        gridTemplateColumns: `repeat(${
                                            Object.keys(data[0]).length
                                        }, 1fr)`,
                                    }}>
                                    {Object.keys(rows).map((key) => {
                                        return (
                                            <ValueCard
                                                key={`${key}__${index}`}
                                                value={rows[key]}
                                                editValue={(value) => {
                                                    let updData = editRow(index, key, value, data);
                                                    dispatch(
                                                        setState({
                                                            data: updData,
                                                        }),
                                                    );
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                                <div className={classes.border}></div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
