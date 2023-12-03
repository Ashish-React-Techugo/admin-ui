import DesignWrapper from "@/HOC/DesignWrapper"
import { CustomTable } from "@/components/custom/common/Table"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { RootState } from "@/redux/interfaces"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const Tasklist = () => {
    const navigate = useNavigate();
    const { tasks } = useSelector((state: RootState) => state.tasks);
    const handleAddTask = () => {
        navigate('/tasklist/add')
    }
    const done = tasks.filter(task => task.status === "Done")
    const inProgress = tasks.filter(task => task.status === "In Progress")
    return (
        <DesignWrapper>
            <div className="flex p-6 items-center">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold">Latest Tasks</h1>
                    <span className="text-sm"><b>{tasks.length} total</b>, proceed to resolve them.</span>
                </div>
                <div className="w-1/4 grid  text-center grid-cols-2">
                    <div className="w-full">
                        <h1 className="text-4xl font-bold">{done.length}</h1>
                        <span className="text-sm">Done</span>
                    </div>
                    <div className="w-full">
                        <h1 className="text-4xl font-bold">{inProgress.length}</h1>
                        <span className="text-sm">In Progress</span>
                    </div>
                </div>
                <Button onClick={handleAddTask}>Add Task</Button>
            </div>
            <Separator />
            <div className="p-4 w-full">
                <CustomTable data={tasks} />
            </div>
        </DesignWrapper>
    )
}

export default Tasklist