import React, {useState} from "react";
import {ReactComponent as ArrowDownIcon} from "../../../images/icons/arrow-down.svg";
import {ReactComponent as ArrowUpIcon} from "../../../images/icons/arrow-up.svg";
import { useNavigate } from 'react-router-dom';

export const NavItem = ({ text = 'item', to = '', children }) => {
    const [selected, setSelected] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        if (children) {
            setSelected(prev => (prev === text ? '' : text));
        } else if (to) {
            navigate(to);
        }
    };

    return (
        <div className="relative">
            <div
                className="flex space-x-2 cursor-pointer items-center"
                onClick={handleClick}
            >
                <span className="text-bee-black hover:text-amber-nectar">{text}</span>
                {children &&
                    (selected !== text ? <ArrowDownIcon /> : <ArrowUpIcon />)}
            </div>

            {selected === text && children && (
                <div className="absolute left-0 mt-2 z-10">
                    {typeof children === 'function' ? children() : children}
                </div>
            )}
        </div>
    );
};

