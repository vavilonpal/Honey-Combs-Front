import React from "react";
import { Link } from "react-router-dom";
import Preview from "../components/body/home window/Preview";
import Features from "../components/body/home window/Features";
import TopUsers from "../components/body/home window/TopUsers";
import WhyHoneyCombs from "../components/body/home window/WhyHoneyCombs";
import GoLoginOrRegister from "../components/body/home window/GoLoginOrRegister";


export default function HomePage() {
    return (
        <div className="w-full min-h-screen bg-yellow-50 text-gray-900">
            <Preview/>
            <Features/>
            <TopUsers/>
            <WhyHoneyCombs/>
            <GoLoginOrRegister/>
        </div>
    );
}