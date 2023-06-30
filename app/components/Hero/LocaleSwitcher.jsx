"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";
import EngLang from "../../../public/images/languages/eng-lang.png";
import SpanLang from "../../../public/images/languages/spa-lang.png";

const langVariant = { es: SpanLang, en: EngLang };
export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event) {
    startTransition(() => {
      router.replace(`/${event.target.value}${pathname}`);
    });
  }

  return (
    <label
      className={`flex relative text-gray-400 ${
        isPending && "transition-opacity [&:disabled]:opacity-30"
      }`}
    >
      <p className="sr-only">{t("label")}</p>
      <Image src={langVariant[locale]} alt="language" />
      <select
        className="inline-flex "
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {["es", "en"].map((cur) => (
          <option key={cur} value={cur}>
            {`${t("locale", { locale: cur })}`}
          </option>
        ))}
      </select>
    </label>
  );
}

/* appearance-none bg-transparent py-3 pl-2 pr-6 */
