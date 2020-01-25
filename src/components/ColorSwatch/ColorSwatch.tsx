import React from 'react'
import tinycolor from 'tinycolor2'

interface ColorSwatchProps {
    value: string
}

const ColorSwatch = (props: ColorSwatchProps) => {
    const { value } = props;
    const hasBorder = tinycolor(value).getBrightness() > 240;

    return (
        <span className="color-swatch" style={{
            backgroundColor: value,
            border: hasBorder ? `1px solid ${tinycolor(value).darken(10).toString()}` : 'none'
        }} />
    )
}

export default ColorSwatch