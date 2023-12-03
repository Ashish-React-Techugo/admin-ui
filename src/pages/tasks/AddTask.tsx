import DesignWrapper from "@/HOC/DesignWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from "react-router-dom";
import { addTask, editTask } from "@/redux/slices/tasks";
import { Task } from "@/redux/interfaces/tasks";
import { RootState } from "@/redux/interfaces";

const formSchema = z.object({
    name: z.string()
        .min(2, { message: "Name must be at least 2 characters." })
        .max(50, { message: "Name must be at most 50 characters." }),
    description: z.string()
        .min(2, { message: "Description must be at least 2 characters." })
        .max(50, { message: "Description must be at most 50 characters." }),
    price: z.coerce.number()
        .min(10, { message: "Price must be at least 10." })
        .max(500, { message: "Price must be at most 500." }),
    status: z.string()
        .min(2, { message: "Status is required" })
})

const AddTask = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { tasks } = useSelector((state: RootState) => state.tasks);
    const task = tasks.find(task => task.id === id)

    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: task?.name || "",
            description: task?.description || "",
            price: task?.price || 0,
            status: task?.status || ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (id) {
            const editedTask: Task = { ...values, id };
            dispatch(editTask(editedTask as Task))
        } else {
            let newId = uuidv4();;
            const newTask: Task = { ...values, id: newId };
            dispatch(addTask(newTask as Task))
        }
        navigate('/tasklist')
    }
    return (
        <DesignWrapper className="p-4">
            <h1 className="font-bold text-4xl mb-4">{id ? "Edit" : "Add"} Task</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Task Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Task Title" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Task Title
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Description"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Description
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input placeholder="Price" type="number" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Price
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Status</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Status" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="0">Not Selected</SelectItem>
                                        <SelectItem value="Done">Done</SelectItem>
                                        <SelectItem value="In Progress">In Progress</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Status
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </DesignWrapper>
    )
}

export default AddTask