export default function Footer() {
    return (
        <footer className="bg-black w-full py-4 px-6">
            <div className="container mx-auto flex items-center justify-between">
                <p className="text-white text-sm">
                    © 2025 Network Laboratory  Built by Raka Arrayan Muttaqien
                </p>
                <div className="flex space-x-4">
                    <a className="text-white text-sm hover:underline">
                        Privacy
                    </a>
                    <a className="text-white text-sm hover:underline">
                        Terms
                    </a>
                </div>
            </div>
        </footer>
    );
}
