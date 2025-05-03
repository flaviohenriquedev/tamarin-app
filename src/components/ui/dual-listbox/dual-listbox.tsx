'use client'

import './style.css'
import {ChevronLeft, ChevronRight} from "lucide-react";

export function DualListbox() {
    return (
        <div className={`dl-container w-fit h-60`}>
            <div className={`dl-left flex flex-col bg-base-200 rounded-md`}>
                <div className={`w-auto`}>
                    <input className={`w-full`}/>
                </div>

                <div className={`dl-list`}>
                    lista
                </div>
            </div>

            <div className={`dl-middle flex flex-col items-center justify-center h-full gap-2`}>
                <ChevronRight />
                <ChevronLeft />
            </div>

            <div className={`dl-right flex flex-col bg-base-200 rounded-md`}>
                <div className={`w-auto`}>
                    <input className={`w-full`}/>
                </div>

                <div className={`dl-list`}>
                    lista
                </div>
            </div>
        </div>
    )
}