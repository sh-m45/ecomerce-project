import { Fragment } from "react/jsx-runtime";


type LoginModalProps = {
    isOpen: boolean;
};
export default function LoginModal({
    isOpen,
}: LoginModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="flex items-center justify-center bg-gray-300 bg-opacity-50 w-3/5">
            <div>
                <div className="flex items-center gap-2 p-4 rounded-lg ">
                    {/* convert h1 to img  */}
                    <h1>Login Modal</h1>
                </div>

                <div className="flex items-center justify-center gap-2 rounded-lg font-bold text-2xl">
                    <h2>Hala! Let's get started</h2>
                </div>

                <div className="flex flex-col-2 gap-2 mt-5 bg-gray-600 p-1 rounded-lg ">
                    <button className=" text-white p-1 rounded-lg w-1/2 focus:bg-olive-100 focus:text-stone-900 active:bg-olive-100">Login</button>
                    <button className="bg-none-500 text-white p-2 rounded-lg w-1/2 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-white-700">Sign up</button>
                </div>

                <div className="flex flex-col gap-4 mt-6 bg-white-200 p-4 rounded-lg ">
                    <input type="text" placeholder="Username" className="border p-2 rounded-lg   mt-4" />
                    <input type="password" placeholder="Password" className="border p-2 rounded-lg  mt-4" />
                </div>
            </div>
        </div>
    );
}