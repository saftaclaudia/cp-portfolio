import { useState, type SubmitEvent } from "react";
import { useTranslation } from "react-i18next";

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

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data:", formData);
      setIsSubited(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="px-8 py16 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
        {t("contact.title")}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-10">
        {t("contact.subtitle")}
      </p>
      {isSubmited && (
        <div className="bg-mint-100 dark:bg-gray-800 text-mint-700 dark:text-mint-300 px-4 py-3 rounded-lg mb-6 texxt-center">
          {t("contact.succes")}
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
            className="w-full px-4 py-2.5 roundex-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none ficus:ring-2 focus:ring-mint-500"
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
            className="w-full px-4 py-2.5 roundex-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none ficus:ring-2 focus:ring-mint-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-4 py-2.5 roundex-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none ficus:ring-2 focus:ring-mint-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          {t("contact.send")}
        </button>
      </form>
    </section>
  );
}
export default Contact;
