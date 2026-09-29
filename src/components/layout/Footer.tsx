import React from "react";


function Footer() {

    return (
        <div className="mt-16 w-full overflow-x-hidden sm:mt-20">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 border-t border-gray-400 px-4 py-8 sm:px-6 sm:py-10 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-8">
                {/* Copyright */}
                <p className="text-center text-sm text-gray-500 md:text-left">
                    © {new Date().getFullYear()} Novilho Nelore. Todos os direitos reservados.
                </p>
            </div >

        </div >
    );
}

export default Footer;
