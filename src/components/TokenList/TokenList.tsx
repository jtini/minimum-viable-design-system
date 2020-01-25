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
                        <h2 className="token-list__section-header">{key}</h2>
                        {type.name && type.value &&
                            <TokenListItem name={type.name} value={type.value} attributes={type.attributes} comment={type.comment} />
                        }

                        {!type.value && Object.keys(type).map(typeKey => {
                            const item = type[typeKey];

                            return (
                                <div key={typeKey}>
                                    {/* <h3>{typeKey}</h3> */}
                                    {item.name && item.value &&
                                        <TokenListItem name={item.name} value={item.value} attributes={item.attributes} comment={item.comment} />
                                    }

                                    {!item.value && Object.keys(item).map(itemKey => {
                                        const subItem = item[itemKey];

                                        return (
                                            <div key={itemKey}>
                                                {/* <h4>{itemKey}</h4> */}
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