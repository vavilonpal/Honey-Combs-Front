import React, {useState} from "react";
import {ReactComponent as ArrowDownIcon} from "../../../images/icons/arrow-down.svg";
import {ReactComponent as ArrowUpIcon} from "../../../images/icons/arrow-up.svg";

export const NavItem = ({text = 'item', children}) => {
//todo learn  states
    const [selected, setSelected] = useState('');

    return (
        <div className={'relative'}>
            <div className={'flex space-x-2 cursor-pointer items-center'}>
                <span className={'text-bee-black hover:text-amber-nectar'}
                      onClick={() => children && setSelected(text !== selected ? text : '')}>

                    {text}
                </span>
                {children && selected !== text &&  <ArrowDownIcon />}
                {children && selected === text &&  <ArrowUpIcon />}

            </div>
            {selected && children}
        </div>
    )
}

