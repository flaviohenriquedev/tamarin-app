'use client'

import {TabType} from "@/components/ui/tab/ts/TabType";
import {Fragment, useState} from "react";
import {ChevronsLeft, ChevronsRight} from "lucide-react";
import {Button} from "@/components/ui/button/Button";

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
            <div className="flex gap-2 tabs tabs-xs tabs-box p-2 rounded-lg">
                {tabs.map((tab: TabType, index: number) => (
                    <Fragment key={tab.label}>
                        <input
                            type="radio"
                            name="my_tabs_1"
                            className={`tab px-3 rounded-lg`}
                            aria-label={tab.label}
                            checked={tabAtiva === index}
                            onChange={() => setTabAtiva(index)}
                        />
                        <div className={`
                            tab-content
                            border-base-300
                            bg-base-100
                            rounded-lg
                            p-2 ${classNameChildren ? classNameChildren : ''}`}>
                            {tab.children}
                        </div>
                    </Fragment>
                ))}
            </div>

            <div className="mt-4 flex justify-end items-center gap-2 border-b-2 border-base-200 pb-3">
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
