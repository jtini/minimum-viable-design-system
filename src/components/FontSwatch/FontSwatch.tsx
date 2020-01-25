import React from 'react'
import cx from 'classnames'

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
        fontSize: isScaleBase ? value : 'inherit',
        fontWeight: isWeight ? value : 'normal',
        lineHeight: isLineHeight ? value : 1.25,
        letterSpacing: isLetterspacing ? value : 0
    }
    const textSample = () => {
        return 'Hello World'
    }
    // TODO: Need a way to attach fallback to this?

    return (
        <div style={style} className="font-swatch">
            <p className={cx("font-swatch__text", {
                "mono": value === 'native-mono'
            })}>{textSample()}</p>
        </div>
    )
}

export default FontSwatch