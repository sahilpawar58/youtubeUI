import { Clapperboard, Home, Library, Repeat } from "lucide-react"
import { buttonStyles } from "./Button"

export function SideBar(){
    return (
        <>
        <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col flex ml-1 lg:hidden">
            <SmallSidebarItem Icon={Home} title="Home"/>
            <SmallSidebarItem Icon={Repeat} title="Shorts" />
            <SmallSidebarItem Icon={Clapperboard} title="Subscription" />
            <SmallSidebarItem Icon={Library} title="Subscription" />
        </aside>
        <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 gap-2 px-2 flex"></aside>
        </>
    )
}

function SmallSidebarItem({Icon,title,url}){
    return (
        <a href={url} className={(buttonStyles({variant:"ghost"}) , "py-4 px-1 ml-1 flex flex-col rounded-lg items-center gap-1")}>
            <Icon className="w-6 h-6" />
            <div className="text-sm">{title}</div>
        </a>
    )
}