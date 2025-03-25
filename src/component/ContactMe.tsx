"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    subject: z.string().min(2, {
        message: "Subject must be at least 2 characters.",
    }),
    message: z.string().min(2, {
        message: "Message must be at least 2 characters.",
    }),
  })

const ContactMe = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <div className="grid grid-cols-1  xl:grid-cols-2 gap-12 xl:container xl:mx-auto">
        <div>
            <h3 className="text-[1.6rem] font-bold text-title mb-[1rem]">Leave us your info</h3>
            <div className="space-y-8 bg-primary-background p-8 rounded-lg shadow-md">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-[1.8rem] font-medium">Your Full Name ( Required)</FormLabel>
                            <FormControl>
                                <Input className="h-[50px] bg-[#F0F0F6]" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-[1.8rem] font-medium">Your Email ( Required)</FormLabel>
                            <FormControl>
                                <Input className="h-[50px] bg-[#F0F0F6]" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-[1.8rem] font-medium">Subject</FormLabel>
                            <FormControl>
                                <Input className="h-[50px] text-2xl bg-[#F0F0F6]" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-[1.8rem] font-medium">Your Message</FormLabel>
                            <FormControl>
                                <Textarea className="resize-none text-[3rem] h-[210px] bg-[#F0F0F6]"  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button className="text-[1.4rem] font-semibold text-title bg-yellow-100 px-[24px] py-[12px] border-0 rounded-none" type="submit">Send Message</Button>
                    </form>
                </Form>
            </div>
        </div>
        <div className="space-y-[18px]">
            <h3 className="text-[1.6rem] font-bold text-title mb-[1rem]">Contact information</h3>
            <div className="space-y-8 bg-primary-background p-8  rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <h4 className="text-[1.8rem] font-medium">Country:</h4>
                    <p className="text-[1.5rem]">Cambodia</p>
                </div>
                <div className="flex items-center justify-between">
                    <h4 className="text-[1.8rem] font-medium">City:</h4>
                    <p className="text-[1.5rem]">Phnom Penh</p>
                </div>
                <div className="flex items-center justify-between">
                    <h4 className="text-[1.8rem] font-medium">Streat:</h4>
                    <p className="text-[1.5rem]">35 vhatara, Badda</p>
                </div>
            </div>
            <div className="space-y-8 bg-primary-background p-8  rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <h4 className="text-[1.8rem] font-medium">Email:</h4>
                    <p className="text-[1.5rem]">ongchansy13@gmail.com</p>
                </div>
                <div className="flex items-center justify-between">
                    <h4 className="text-[1.8rem] font-medium">Telegram:</h4>
                    <p className="text-[1.5rem]">@chansy1o1</p>
                </div>
                <div className="flex items-center justify-between">
                    <h4 className="text-[1.8rem] font-medium">Phone:</h4>
                    <p className="text-[1.5rem]">+855 973775764</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMe