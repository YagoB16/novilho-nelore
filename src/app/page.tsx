"use client";

import About from "@/src/components/sections/About";
import NavBar from "@/src/components/layout/NavBar";
import Service from "@/src/components/sections/Service";

import Footer from "@/src/components/layout/Footer";
import Hero from "@/src/components/sections/Hero";
import { useForm } from "../contexts/FormContext";
import Contact from "../components/sections/Contact";

export default function Home() {
    const { isFormOpen } = useForm();

    return (
        <>
            <NavBar />
            <div
                className={`w-full overflow-x-hidden transition-all duration-300 ${isFormOpen ? "blur-sm" : ""}`}
            >
                <Hero />
                <About id="about" />
                <Service id="services" />
                <Contact id="contact" />
            </div>
            <Footer />
        </>
    );
}
