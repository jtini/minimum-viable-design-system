import React from 'react'
import tinycolor from 'tinycolor2'

interface ColorSwatchProps {
    name: string,
    value: string
}

const ColorSwatch = (props: ColorSwatchProps) => {
    const { name, value } = props;
    const hasBorder = tinycolor(value).getBrightness() > 240;

    return (
        <span className="color-swatch" style={{
            display: 'inline-block',
            width: 48,
            height: 48,
            backgroundColor: `var(${name})`,
            border: hasBorder ? `1px solid ${tinycolor(value).darken(10).toString()}` : 'none'
        }} />
    )
}

export default ColorSwatch