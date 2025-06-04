'use client'

import {TabType} from "@/components/ui/tab/ts/TabType";
import {useState} from "react";
import {ChevronsLeft, ChevronsRight} from "lucide-react";
import {Button} from "@/components/ui/button/button";

type Props = {
    tabs: TabType[];
    classNameChildren?: string;
};

export function TabGroup({tabs, classNameChildren}: Props) {
    const [tabAtiva, setTabAtiva] = useState<number>(0);

    const retornar = () => {
        if (tabAtiva > 0) {
            setTabAtiva(tabAtiva - 1);
        }
    };

    const avancar = () => {
        if (tabAtiva < tabs.length - 1) {
            setTabAtiva(tabAtiva + 1);
        }
    };

    return (
        <div className="w-full">
            <div className="flex gap-2 tabs tabs-xs tabs-box">
                {tabs.map((tab: TabType, index: number) => (
                    <>
                        <input
                            key={index}
                            type="radio"
                            name="my_tabs_1"
                            className="tab cursor-default px-3"
                            aria-label={tab.label}
                            checked={tabAtiva === index}
                            onChange={() => setTabAtiva(index)}
                        />
                        <div className={`
                            tab-content
                            border-base-300
                            bg-base-100
                            p-2 ${classNameChildren ? classNameChildren : ''}`}>
                            {tab.children}
                        </div>
                    </>
                ))}
            </div>

            <div className="mt-4 flex justify-end items-center gap-2 border-b border-neutral-200 pb-3">
                <Button
                    buttonStyle={`primary`}
                    onClick={retornar}
                    disabled={tabAtiva === 0}
                >
                    <ChevronsLeft />
                </Button>
                <Button
                    buttonStyle={`primary`}
                    onClick={avancar}
                    disabled={tabAtiva >= tabs.length - 1}
                >
                    <ChevronsRight />
                </Button>
            </div>
        </div>
    );
}
