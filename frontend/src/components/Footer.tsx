export default function Footer() {
    return (
        <footer className="bg-gray-50 h-10">
            <div className="max-w-7xl mx-auto mb-6 px-4 overflow-hidden sm:px-6 lg:px-8">
                <p className="text-center text-base text-gray-400">
                    &copy; {new Date().getFullYear()} Uri Bar Ilan and Asaf
                    Sivan.
                </p>
            </div>
        </footer>
    );
}
