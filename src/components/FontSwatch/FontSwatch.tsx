import React from 'react'

interface FontSwatchProps {
    value: string,
    name: string
}

const FontSwatch = (props: FontSwatchProps) => {
    const { value, name } = props;
    const isFamily = name.indexOf('family') > -1;
    const isScaleBase = name.indexOf('scale') > -1 && name.indexOf('base') > -1;
    const isWeight = name.indexOf('weight') > -1;
    const isLineHeight = name.indexOf('line-height') > -1;
    const isLetterspacing = name.indexOf('letterspacing') > -1;
    const style = {
        fontFamily: isFamily ? value : 'inherit',
        fontSize: isScaleBase ? value : 'inherit',
        fontWeight: isWeight ? value : 'normal',
        lineHeight: isLineHeight ? value : 1.25,
        letterSpacing: isLetterspacing ? value : 0
    }
    const textSample = () => {
        return 'The quick brown fox jumps over the lazy dog.'
    }
    // TODO: Need a way to attach fallback to this?

    return (
        <div style={style} className="font-swatch">
            <p className="font-swatch__text">{textSample()}</p>
        </div>
    )
}

export default FontSwatch