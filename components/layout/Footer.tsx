// components/footer.tsx

import { Fragment } from "react/jsx-runtime";
import styles from "./layout.module.css"
import { BadgeAlert, CircleAlert, Icon, Mail, OctagonAlert, PhoneCall, ShoppingCart } from "lucide-react";
export function Footer() {
    const popularSearches = [
        "Body Mist",
        "S25 Ultra",
        "Samsung S25",
        "Dyson",
        "Sunscreen",
        "Vitamin C Serum",
        "Self Tanner",
        "Travel Luggage",
        "Aldo Bags",
        "Cosmetics",
        "iPhone 17 Price",
        "iPhone 17 Pro",
        "Tablet",
        "iPhone 17 Air",
        "iPhone 17 Pro Max",
        "iPhone 17 Series",
        "Barbie",
        "Lattafa Perfume",
        "Rasasi Perfume",
        "Versace Perfume",
        "Chanel Perfume",
        "Dior Perfume",
        "Nothing Phone",
        "Best Laptops",
        "Sunglasses Men",
        "Flip Flops",
        "Birkenstock",
        "Handbags",
        "Sunglasses Women",
        "LG Fridge",
        "Samsung Fridge",
        "Whirlpool Fridge",
        "Ninja Air Fryer",
        "Philips Air Fryer",
        "Nutricook Air Fryer",
        "Squishmallows",
        "Monopoly",
        "Lego",
        "MacBook Air",
        "MacBook Pro",
        "Samsung S24",
        "iPhone 16",
        "Samsung S23 Ultra",
        "iPhone 16 Plus",
        "iPhone 16 Pro",
        "Samsung Galaxy S24 Ultra",
        "Samsung S23",
        "iPhone 16 Pro Max",
        "Kindle",
        "Perfumes",
        "Beauty of Joseon",
        "ASUS",
        "Huawei",
        "Apple",
        "Acer Laptops",
        "MacBook",
        "Microsoft Laptops",
        "ASUS Laptops",
        "Gaming Laptop",
        "Dell",
        "Lenovo",
        "Dell Laptops",
        "MSI",
        "MSI Laptops",
        "HP Laptops",
        "Huawei Laptops",
        "Microsoft",
        "Samsung Laptops",
        "Lenovo Laptops",
        "HP",
        "Acer",
        "Razer Laptops",
        "Sony Speaker",
        "Marshall Speaker",
        "Bose Speakers",
        "JBL Speakers",
        "Harman Kardon Speaker",
        "PS5",
        "Nintendo Switch Games",
        "Nintendo Switch",
        "PlayStation",
        "Huawei Watch",
        "Samsung Smartwatch",
        "Fitbit Fitness Trackers",
        "Fitbit Smartwatch",
        "Huawei Phone",
        "iPhone",
        "Samsung Galaxy Phones",
        "Desktop",
        "Telescope",
        "Bike For Kids",
    ];
    return (
        <Fragment>
            <div>
                <div className="px-5 font-bold mb-2 text-gray-700 ">
                    <h2>Popular Searches</h2>
                </div>
                <div className="container flex flex-wrap gap-2 px-5 text-sm">
                    {popularSearches.map((item) => (
                        <span key={item} className={styles.popularSearchSpan}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-5 gap-4 px-6 mb-10 my-5 border border-1 border-gray-200 py-5 bg-gray-100">
                <div className="col-span-2">
                    <h2 className="font-bold text-xl pb-1">We're Always Here To Help</h2>
                    <p className="text-xs text-gray-500 ">Reach out to us through any of these support channels</p>
                </div>

                <div className="flex pl-5">
                    <div className="flex items-center">
                        <CircleAlert size={35} className="p-2 bg-gray-50 rounded-full border border-gray-300" />
                    </div>
                    <div className="mx-2 flex items-center leading-5 font-sans antialiased">
                        <div>
                            <p className="text-sm font-semibold text-gray-400">HELP CENTER</p>
                            <p className="text-lg font-bold text-gray-800">help.noon.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex pl-5">
                    <div className="flex items-center">
                        <Mail size={35} className="p-2 bg-gray-50 rounded-full border border-gray-300" />
                    </div>
                    <div className="mx-2 flex items-center leading-5 font-sans antialiased">
                        <div>
                            <p className="text-sm font-semibold text-gray-400">EMAIL SUPPORT</p>
                            <p className="text-lg font-bold text-gray-800">egypt@noon.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex pl-5">
                    <div className="flex items-center">
                        <PhoneCall size={35} className="p-2 bg-gray-50 rounded-full border border-gray-300" />
                    </div>
                    <div className="mx-2 flex items-center leading-5 font-sans antialiased">
                        <div>
                            <p className="text-sm font-semibold text-gray-400">PHONE SUPPORT</p>
                            <p className="text-lg font-bold text-gray-800">16358</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shop on the Go and Connect with Us Section */}
            <div className="bg-white py-4">
                <div className="max-w-6xl mx-auto flex items-center justify-between ">
                    {/* Left: Shop on the Go */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-800 mb-4 tracking-wider">SHOP ON THE GO</h3>
                        <div className="flex gap-3">
                            {/* App Store */}
                            <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.05 13.5c-.91 0-1.82.55-2.25 1.51.93.64 1.55 1.62 1.55 2.79 0 .27-.02.53-.08.79.71.33 1.5.52 2.33.52 3.35 0 6.07-2.72 6.07-6.07 0-3.35-2.72-6.07-6.07-6.07-1.5 0-2.89.55-3.96 1.46 1.45.88 2.41 2.56 2.41 4.44 0 .99-.24 1.93-.66 2.75.46.37 1.02.59 1.66.59z"/>
                                </svg>
                                <div className="text-left">
                                    <p className="text-xs">Download on the</p>
                                    <p className="text-sm font-semibold">App Store</p>
                                </div>
                            </div>

                            {/* Google Play */}
                            <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3.609 1.05L13.844 12 3.609 22.95c-.385.63-.116 1.456.597 1.456.24 0 .479-.074.681-.219l10.625-7.815 1.918 1.456 8.864-5.491c.596-.368.596-1.207 0-1.575L16.812 5.3l-1.918 1.456L4.269.219C4.067.074 3.828 0 3.588 0c-.713 0-.982.826-.597 1.456z"/>
                                </svg>
                                <div className="text-left">
                                    <p className="text-xs">GET IT ON</p>
                                    <p className="text-sm font-semibold">Google Play</p>
                                </div>
                            </div>

                            {/* AppGallery */}
                            <div className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-red-700 transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                </svg>
                                <div className="text-left">
                                    <p className="text-xs">EXPLORE IT ON</p>
                                    <p className="text-sm font-semibold">AppGallery</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Connect with Us */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-800 mb-4 tracking-wider">CONNECT WITH US</h3>
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition">
                                <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </div>
                            {/* Twitter/X */}
                            <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition">
                                <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7-1.33 2-4 6-7 7"/></svg>
                            </div>
                            {/* Instagram */}
                            <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition">
                                <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
                            </div>
                            {/* LinkedIn */}
                            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition">
                                <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-gray-100 border-t border-gray-300 px-6 py-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Left: Copyright */}
                    <div className="text-sm text-gray-600">
                        <p>© 2026 noon. All Rights Reserved</p>
                    </div>

                    {/* Center: Payment Methods */}
                    <div className="flex items-center gap-4">
                        {/* Mastercard */}
                        <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center text-white font-bold text-xs">
                            MC
                        </div>
                        {/* Visa */}
                        <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                            VISA
                        </div>
                        {/* Valu+ */}
                        <div className="w-12 h-8 bg-cyan-400 rounded flex items-center justify-center text-white font-bold text-xs">
                            VALU+
                        </div>
                        {/* American Express */}
                        <div className="w-12 h-8 bg-blue-400 rounded flex items-center justify-center text-white font-bold text-xs">
                            AMEX
                        </div>
                        {/* Cash */}
                        <div className="w-12 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold text-xs">
                            CASH
                        </div>
                    </div>

                    {/* Right: Links */}
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Careers</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Warranty Policy</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Sell with us</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Terms of Use</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Terms of Sale</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}