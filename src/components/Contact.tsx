import { useState, type SubmitEvent } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

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
      console.log("EmilsJS error:", error);
      setSendError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="px-8 py-24 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-2">
        {t("contact.title")}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-10">
        {t("contact.subtitle")}
      </p>
      {isSubmited && (
        <div className="bg-mint-100 dark:bg-gray-800 text-mint-700 dark:text-mint-300 px-4 py-3 rounded-lg mb-6 text-center">
          {t("contact.success")}
        </div>
      )}

      {sendError && (
        <div className="bg-red-100 dark:bk-red-900/30 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-6 text-center">
          {t("contact.errorSend")}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {t("contact.name")}
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-mint-500"
          />
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
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-mint-500"
          />
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
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-mint-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950 transition-colors"
        >
          {isSending ? "..." : t("contact.send")}
        </button>
      </form>
    </section>
  );
}
export default Contact;
