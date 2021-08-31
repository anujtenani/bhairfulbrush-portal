import React from 'react';
import {FormattedNumber} from 'react-intl'
function DefaultCurrencyRender({value}) {
    return (
        <FormattedNumber value={value} style={"currency"} currency={"USD"}/>
    );
}

export default DefaultCurrencyRender;
