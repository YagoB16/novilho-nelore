"use client";

import About from "@/src/components/sections/Locations";
import NavBar from "@/src/components/layout/NavBar";
import Service from "@/src/components/sections/Faq";

import Footer from "@/src/components/layout/Footer";
import Hero from "@/src/components/sections/Hero";
import { useForm } from "../contexts/FormContext";
import Contact from "../components/sections/Contact";
import Faq from "@/src/components/sections/Faq";
import Locations from "@/src/components/sections/Locations";

export default function Home() {
    const { isFormOpen } = useForm();

    return (
        <>
            <NavBar />
            <div
                className={`w-full pt-22 overflow-x-hidden transition-all duration-300 ${isFormOpen ? "blur-sm" : ""}`}
            >
                <Hero />
                <Locations id="locations" />
                <Faq id="faq" />
                <Contact id="contact" />
            </div>
            <Footer />
        </>
    );
}
