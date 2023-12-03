import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const DesignWrapper = ({ className, children }: { className?: String, children: ReactNode }) => {
    return <div className={cn("m-2 rounded-2xl border-2 bg-white", className)}>{children}</div>
}

export default DesignWrapper;