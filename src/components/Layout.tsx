'use client'

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[var(--navy)]">
            <main className="flex flex-1 w-full flex-col">
                {children}
            </main>
        </div>
    );
}
