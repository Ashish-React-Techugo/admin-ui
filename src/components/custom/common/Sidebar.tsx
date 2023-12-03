import { Separator } from "@/components/ui/separator";
import { GiCardboardBox } from "react-icons/gi";
import { MdViewComfy } from "react-icons/md";
import { SiCodeproject } from "react-icons/si";
import { VscTasklist } from "react-icons/vsc";
import { MdDesignServices } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";

const Sidebar = () => {
    const sidebarItems = [
        {
            icon: MdViewComfy,
            text: "Dashboard",
            link: "/"
        },
        {
            icon: SiCodeproject,
            text: "Projects",
            link: "/"
        },
        {
            icon: VscTasklist,
            text: "Task List",
            link: "/"
        },
        {
            icon: MdDesignServices,
            text: "Services",
            link: "/"
        },
        {
            icon: MdNotificationsActive,
            text: "Notifications",
            link: "/"
        }
    ]
    return (
        <div>
            <div className="flex items-center p-4">
                <GiCardboardBox className="w-1/3 text-3xl" />
                <h2 className="flex-1 font-bold text-xl">Bress</h2>
            </div>
            <Separator />
            <ul>
                {sidebarItems.map((item) => (
                    <li key={item.text} className="flex items-center px-5 py-4 m-2 rounded-2xl hover:bg-stone-700 hover:text-white hover:cursor-pointer">
                        <item.icon className="w-1/4 text-2xl" />
                        <h2 className="flex-1 font-normal  text-sm">{item.text}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Sidebar