import ScriptLoader from "./components/ScriptLoader";

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <ScriptLoader />
        </>
    );
}
