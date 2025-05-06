import {TabType} from "@/components/ui/tab/ts/TabType";

type Props = {
    tabs: TabType[]
}

export function TabGroup({ tabs }: Props) {
    return (
        <div className="flex gap-2 tabs tabs-xs tabs-box h-full">
            {tabs && tabs.map((tab: TabType, index: number) => (
                <>
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab cursor-default px-3"
                        aria-label={tab.label}
                        defaultChecked={index === 0}/>
                    <div className="tab-content border-base-300 bg-base-100 p-2">
                        {tab.children}
                    </div>
                </>
            ))}
        </div>
    )
}