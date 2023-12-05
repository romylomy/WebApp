"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import getTask from '@/utils/services';
import { string } from "zod"

 
const FormSchema = z.object({
    deliverable: z
    .string()
    .min(10, {
      message: "Your assignment information is too short, please provide the full assignment documentation",
    })
})
// Import statements...

type Choice = {
    setChoices: (choices: any) => void; // Replace 'any' with the actual type of choices
  };
  
  export default function DeliverableForm({ setChoices }: Choice) {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    });
  
    async function onSubmit(data: z.infer<typeof FormSchema>) {

    const response = await getTask({ deliverable: data.deliverable });
    const result = await response.json();
    setChoices(result.choices);
           
        
      // Display the toast (assuming toast is properly configured in your app)
      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }
  
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="deliverable"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Task Generator</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Add assignment deliverable"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Copy and paste your assignment doc into the field to convert your deliverables into a list of tasks
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="group">
            Submit
            <BsArrowRight className="group-hover:translate-x-1 transition" />
          </Button>
        </form>
      </Form>
    );
  }
  