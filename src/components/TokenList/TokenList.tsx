import React from 'react'
import TokenListItem from '../TokenListItem/TokenListItem'

interface TokenListProps {
    tokens: any
}

const TokenList = (props: TokenListProps) => {
    const { tokens } = props

    return (
        <section className="token-list">
            {Object.keys(tokens).map(key => {
                const type = tokens[key];

                return (
                    <div key={key} className="token-list__section">
                        <p className="token-list__section-header bold">{key}</p>
                        {type.name && type.value &&
                            <TokenListItem name={type.name} value={type.value} attributes={type.attributes} comment={type.comment} />
                        }

                        {!type.value && Object.keys(type).map(typeKey => {
                            const item = type[typeKey];

                            return (
                                <div key={typeKey}>
                                    {item.name && item.value &&
                                        <TokenListItem name={item.name} value={item.value} attributes={item.attributes} comment={item.comment} />
                                    }

                                    {!item.value && Object.keys(item).map(itemKey => {
                                        const subItem = item[itemKey];

                                        return (
                                            <div key={itemKey}>
                                                {subItem.name && subItem.value &&
                                                    <TokenListItem name={subItem.name} value={subItem.value} attributes={subItem.attributes} comment={subItem.comment} />
                                                }

                                                {!subItem.value && Object.keys(subItem).map(stateKey => {
                                                    const state = subItem[stateKey];

                                                    return (
                                                        <div key={stateKey}>
                                                            {/* <p>{stateKey}</p> */}
                                                            {state.name && state.value &&
                                                                <TokenListItem name={state.name} value={state.value} attributes={state.attributes} comment={state.comment} />
                                                            }
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </section>
    )
}

export default TokenList