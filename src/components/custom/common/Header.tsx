import { Input } from "@/components/ui/input"
import { getDateFormat } from "@/utils/moment";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    const date = getDateFormat(new Date(), "DD MMMM YYYY")
    return (
        <div className="p-4 m-2 rounded-2xl border-2 h-20 flex items-center justify-between bg-white">
            <div className="w-3/5 flex bg-slate-200 rounded-3xl px-2 py-1 items-center">
                <Input className="bg-transparent border-0 focus:ring-0 focus-visible:ring-transparent text-normal" placeholder="Search..." />
                <FaSearch className="w-12  object-contain" />
            </div>
            <span className="pr-10">Date: {date}</span>
        </div>
    )
}

export default Header