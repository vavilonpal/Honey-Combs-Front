import React from "react";

export const NavMenu = ({items = []}) => {
    return (
        <div className={'flex column'}>
            {items.map(({text}) =>
                <span>
                    {text}
                </span>)
            }
        </div>
    )
}