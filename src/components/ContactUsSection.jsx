import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export default function ContactUsSection() {
  const { t } = useTranslation();

  // Define validation schema using Zod and translations
  const formSchema = z.object({
    name: z.string().min(2, { message: t("contact_section.validation.name_min") }),
    email: z.string().email({ message: t("contact_section.validation.email_invalid") }),
    message: z.string().min(10, { message: t("contact_section.validation.message_min") }),
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    try {
      const recipientEmail = "accounts@nirautomobile.com";
      const subject = `Contact Form Submission from ${encodeURIComponent(data.name)}`;
      const body = encodeURIComponent(`${data.message}\n\nThank you\nKind Regards\n${data.name}\n${data.email}`);
      const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;
      setSubmitStatus({ type: "success", message: t("contact_section.status.success") });
      form.reset();
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus({ type: "error", message: t("contact_section.status.error") });
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="mx-auto px-4 max-w-2xl">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {t("contact_section.title")}
        </motion.h2>

        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-6 space-y-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact_section.form.name_label")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact_section.form.name_placeholder")} {...field} />
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
                        <FormLabel>{t("contact_section.form.email_label")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact_section.form.email_placeholder")} type="email" {...field} />
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
                        <FormLabel>{t("contact_section.form.message_label")}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t("contact_section.form.message_placeholder")} rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {submitStatus && (
                    <p className={`text-sm ${submitStatus.type === "success" ? "text-green-500" : "text-red-500"}`}>
                      {submitStatus.message}
                    </p>
                  )}

                  <Button type="submit" className="w-full">
                    {t("contact_section.form.send_button")}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
