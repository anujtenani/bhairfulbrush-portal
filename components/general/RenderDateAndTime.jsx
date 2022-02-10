import React, {useMemo} from 'react';
import {FormattedDate, FormattedTime} from "react-intl";

function RenderDateAndTime({value}) {
    const date = useMemo(()=>new Date(value), [value])
    return (
        <span>
            <div>
            <FormattedDate value={date} month={"short"} year="numeric" day={"2-digit"}/>
            </div>
            <small className={"text-muted"}>
                <FormattedTime value={date} minute={"2-digit"} hour={"2-digit"}/>
            </small>
        </span>
    );
}

export default RenderDateAndTime;
