"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
type LoginModalProps = {
    isOpen: boolean;
};
export default function LoginModal({
    isOpen,
}: LoginModalProps) {
    if (!isOpen) {
        return null;
    }

    const [open, setOpen] = useState(true);
    const closePopup = () => {
        setOpen(false);
        history.back();
    };

    return (
        <Fragment>
            {open ? <div className="fixed inset-0 flex items-center justify-center bg-neutral-400 bg-opacity-50">
                <div className="flex items-center justify-center bg-gray-100 bg-opacity-50 w-130 pb-4 border border-gray-300 rounded-lg">
                    <div className="absolute top-94 left-215 cursor-pointer text-gray-500 hover:text-gray-700 w-8 h-8 bg-stone-50 rounded-full flex items-center justify-center">
                        <button type="button" onClick={() => closePopup()}>
                            <FontAwesomeIcon icon={faXmark} className="w-5 h-5 cursor-pointer" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center/images/loginGround.svg gap-2 pb-4 rounded-lg h-80">
                            <img src="/images/loginGround.svg" className="" alt="loginGround" />
                        </div>

                        <div>
                            <div className="flex items-center justify-center gap-2 rounded-lg font-bold text-2xl">
                                <h2 className="text-2xl font-bold text-gray-700 font-sans">Hala! Let's get started</h2>
                            </div>

                            <div className="flex flex-col-2 gap-2 mt-5 bg-gray-600 px-1 py-2 rounded-lg w-80 ">
                                <button className=" text-white p-1 rounded-lg w-1/2 focus:bg-olive-100 focus:text-stone-900 active:bg-olive-100">Login</button>
                                <button className=" text-white p-1 rounded-lg w-1/2 focus:bg-olive-100 focus:text-stone-900 active:bg-olive-100">Sign up</button>
                            </div>

                            <div className="flex flex-col gap-3 mt-1 bg-white-200 rounded-lg ">
                                <input type="text" placeholder="Please enter email or mobile number" className="border p-3 rounded-lg focus:bg-gray-200 mt-4 w-80" />
                                <button className="bg-gray-200 text-gray-500 p-3 rounded-lg focus:bg-gray-200 active:bg-gray-200 w-80 font-semibold font-sans">CONTINUE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div></div>}
        </Fragment>

    );
}