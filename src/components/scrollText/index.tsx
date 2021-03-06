import * as React from 'react';

export default function scrollText (props: any) {
    const style: any = {
        height: '28px',
        margin: '5px 5px 5px 0px',
        width: '100%',
        textAlign: 'left',
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        border: 'none'
    }
    const { value } = props;
    return <input
        data-testid='test-scroll-text'
        style={Object.assign({}, style, props.style || {})}
        title={value}
        readOnly
        className="cell-input"
        value={value}
    />
}
