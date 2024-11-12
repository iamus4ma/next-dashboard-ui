
export default function DashoboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* LEFT */}
            <div className="w-[14%] bg-red-300">Left</div>


            {/* RIGHT */}
            <div className="w-[86%] bg-green-300">Right</div>
        </div>
    );
}
