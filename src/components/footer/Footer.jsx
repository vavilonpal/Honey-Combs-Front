import {Link} from "react-router-dom";
import React from "react";


export default function Footer() {

    return (
        <footer className="text-center py-8 text-sm text-gray-500 border-t">
            © 2025 HoneyCombs · <Link to="/about" className="underline">О проекте</Link> · <Link to="/help"
                                                                                                 className="underline">Помощь</Link>
        </footer>
    )
}