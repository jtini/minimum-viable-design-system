import React from 'react'
import ColorSwatch from '../ColorSwatch/ColorSwatch'
import FontSwatch from '../FontSwatch/FontSwatch'

interface TokenListItemProps {
    name: string,
    value: string,
    attributes: any
}

const TokenListItem = (props: TokenListItemProps) => {
    const { name, value, attributes } = props;
    const { category } = attributes;
    const isColor = category === 'color';
    const isFont = category === 'type';

    return (
        <div className="token-list-item">
            <span className="token-list-item__text-wrapper">
                <p className="token-list-item__text token-list-item__name">{name}</p>
                <p className="token-list-item__text token-list-item__value">{value}</p>
            </span>
            {isColor &&
                <ColorSwatch value={value} />
            }
            {isFont &&
                <FontSwatch name={name} value={value} />
            }
        </div>
    )
}

export default TokenListItem