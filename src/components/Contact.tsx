import { useState, type SubmitEvent } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { User, Mail, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmited, setIsSubited] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact.errorRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.errorRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.errorEmail");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.errorRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    setSendError(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setIsSubited(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSendError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="px-8 py-24 max-w-2xl mx-auto">
      <p className="text-coral-500 dark:text-coral-300 font-semibold text-sm tracking-wide uppercase text-center mb-3">
        {t("contact.eyebrow")}
      </p>
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-2">
        {t("contact.title")}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-10">
        {t("contact.subtitle")}
      </p>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-8 sm:p-10">
        {isSubmited && (
          <div className="bg-mint-100 dark:bg-gray-800 text-mint-700 dark:text-mint-300 px-4 py-3 rounded-lg mb-6 text-center">
            {t("contact.success")}
          </div>
        )}

        {sendError && (
          <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-6 text-center">
            {t("contact.errorSend")}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {t("contact.name")}
            </label>
            <div className="relative">
              <User
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
              />
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white hover:border-mint-500 dark:hover:border-mint-300 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {t("contact.email")}
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
              />
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white hover:border-mint-500 dark:hover:border-mint-300 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {t("contact.message")}
            </label>
            <div className="relative">
              <MessageSquare
                size={18}
                className="absolute left-3.5 top-3.5 text-gray-400 dark:text-gray-500"
              />
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white hover:border-mint-500 dark:hover:border-mint-300 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-colors"
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="bg-coral-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-coral-700 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition-colors"
          >
            {isSending ? "..." : t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
