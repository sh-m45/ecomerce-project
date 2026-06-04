import styles from "./profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faShieldHalved, faQrcode, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const quickLinks = [
    { id: 1, icon: '📦', label: 'Orders', hint: '' },
    { id: 2, icon: '↩️', label: 'Returns', hint: '' },
    { id: 3, icon: '💳', label: 'noon Credits', hint: '' },
    { id: 4, icon: '💛', label: 'Wishlist', hint: '21 items' },
];

const accountMenu = [
    { id: 'profile', icon: '👤', label: 'Profile', highlighted: true },
    { id: 'addresses', icon: '📍', label: 'Addresses' },
    { id: 'payments', icon: '💳', label: 'Payments' },
    { id: 'Warranty Claims', icon: '🛠️', label: 'Warranty Claims' },
    { id: 'Gift Cards', icon: '🎁', label: 'Gift Cards' },
];

const othersMenu = [
    { id: 'Notifications', label: 'Notifications', icon: <FontAwesomeIcon icon={faBell} /> },
    { id: 'Security Settings', label: 'Security', icon: <FontAwesomeIcon icon={faShieldHalved} /> },
    { id: 'QR Code', label: 'QrCode', icon: <FontAwesomeIcon icon={faQrcode} /> },
];



export default function Profile() {
    return (
        <div className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <aside className="lg:col-span-1">
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 flex-shrink-0 rounded-full bg-slate-700 flex items-center justify-center text-white font-semibold">sm</div>
                                <div>
                                    <p className="font-semibold">Hala shrouk!</p>
                                    <p className="text-xs text-slate-500">eng.shrouk.mamdoh@gmail.com</p>
                                </div>
                            </div>

                            <div className="mt-5 text-sm">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-700">Profile Completion</span>
                                    <span className="inline-block rounded-full bg-yellow-300 px-2 py-0.5 text-xs font-semibold">60%</span>
                                </div>
                                <div className="mt-3 h-2 w-full rounded-full bg-slate-200">
                                    <div className="h-2 rounded-full bg-yellow-400" style={{ width: '60%' }} />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                            <ul className="space-y-3">
                                {quickLinks.map((item) => (
                                    <li key={item.id} className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-slate-50">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 flex items-center justify-center rounded-md bg-slate-100 text-slate-700">{item.icon}</div>
                                            <span className="text-sm">{item.label}</span>
                                        </div>
                                        {item.hint ? <span className="text-xs text-slate-400">{item.hint}</span> : null}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">My Account</p>
                            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                                <ul className="divide-y divide-slate-100">
                                    {accountMenu.map((m) => (
                                        <li key={m.id} className={`flex items-center gap-3 px-4 py-3 ${m.highlighted ? 'bg-amber-50 rounded-lg' : ''}`}>
                                            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-700">{m.icon}</div>
                                            <span className="text-sm font-medium">{m.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Others</p>
                            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                                <ul className="divide-y divide-slate-100">
                                    {othersMenu.map((m) => (
                                        <li key={m.id} className={`flex items-center gap-3 px-4 py-3 `}>
                                            <div className="h-4 w-4 flex items-center justify-center rounded-full bg-slate-100 text-slate-700">{m.icon}</div>
                                            <span className="text-sm">{m.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Others</p>
                            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                                <ul className="divide-y divide-slate-100">
                                    <li className={`flex items-center gap-3 px-4 py-3 `}>
                                        <div className="h-4 w-4 flex items-center justify-center rounded-full bg-slate-100 text-slate-700"><FontAwesomeIcon icon={faPowerOff } /></div>
                                        <span className="text-sm">Sign Out</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>

                    <main className="lg:col-span-2">
                        <div className="mb-6">
                            <h1 className="text-3xl font-semibold">Your Profile</h1>
                            <p className="text-sm text-slate-600 font-medium">View & Update Your Personal and Contact Information.</p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm pt-9 pb-15">
                            <form className="space-y-6">
                                <h2 className="font-medium text-xl">Contact Information</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                                    <div>
                                        <label htmlFor="email" className="block text-md text-slate-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="your.email@example.com"
                                            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-md text-slate-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                                        />
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-6 shadow-sm pt-9 pb-15">
                            <h2 className="font-medium text-xl">Personal Information</h2>

                            <form className="mt-6 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                                    <div>
                                        <label htmlFor="firstName" className="block text-md text-slate-700 mb-2">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            placeholder="shrouk"
                                            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="lastName" className="block text-md text-slate-700 mb-2">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            placeholder="mamdouh"
                                            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="birthDate" className="block text-md text-slate-700 mb-2">
                                            Birthdate
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                id="birthDate"
                                                placeholder="DD / MM / YYYY"
                                                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 pr-3 text-sm text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                                            />
                                            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400 text-lg">
                                                📅
                                            </span>
                                        </div>
                                        <p className="mt-2 text-xs text-slate-400">This cannot be changed later</p>
                                    </div>

                                    <div>
                                        <label className="block text-md text-slate-700 mb-2">Gender</label>
                                        <div className="flex gap-3">
                                            <label className="flex-1 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-400">
                                                <input type="radio" name="gender" value="male" className="mr-2 h-4 w-4 text-sky-600 focus:ring-sky-500" />
                                                <span className="inline-flex items-center gap-2">
                                                    {/* <span>👨</span> */}
                                                    Male
                                                </span>
                                            </label>
                                            <label className="flex-1 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-400">
                                                <input type="radio" name="gender" value="female" defaultChecked className="mr-2 h-4 w-4 text-sky-600 focus:ring-sky-500" />
                                                <span className="inline-flex items-center gap-2">
                                                    {/* <span>👩</span> */}
                                                    Female
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="nationality" className="block text-md text-slate-700 mb-2">
                                            Nationality
                                        </label>
                                        <select
                                            id="nationality"
                                            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                                        >
                                            <option value="">Select Nationality</option>
                                            <option value="saudi-arabia">Saudi Arabia</option>
                                            <option value="egypt">Egypt</option>
                                            <option value="united-arab-emirates">United Arab Emirates</option>
                                            <option value="usa">USA</option>
                                            <option value="uk">United Kingdom</option>
                                        </select>
                                    </div>

                                </div>
                            </form>
                        </div>

                        <div>
                            <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-17 py-3 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                                Update Profile
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}



