import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import { Layout } from "../components/Layout";
import { LanguageProvider } from "../contexts/LanguageContext";
import { FormProvider } from "../contexts/FormContext";

export const metadata: Metadata = {
    title: "Novilho Nelore",
    description: "A website ",
    icons: {
        icon: "/favicon.ico",
    },
};

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="pt-br" className={`${geistSans.variable} scroll-smooth`}>
            <body>
                <LanguageProvider>
                    <FormProvider>
                        <Layout>{children}</Layout>
                    </FormProvider>
                </LanguageProvider>
                <Analytics />
            </body>
        </html>

    );
}
