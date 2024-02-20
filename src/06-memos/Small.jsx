import { memo } from "react";

export const Small = memo(({value}) => {

    console.log('llamado a small');

    return (
        <small>{ value }</small>
    )
})
