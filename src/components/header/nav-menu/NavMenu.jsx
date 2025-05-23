import React from "react";

export const NavMenu = ({items = []}) => {
    //todo
    return (
        <div className={'flex flex-col px-4 py-2 bg-cream-white drop-shadow rounded-lg absolute top-10 right-0 w-36 space-y-2 z-30 '}>
            {items.map(({text}) =>
                <span>
                    {text}
                </span>)
            }
        </div>
    )
}