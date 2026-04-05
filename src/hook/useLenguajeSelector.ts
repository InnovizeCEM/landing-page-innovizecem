import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export function useLanguageSelector() {
  const router = useRouter();
  const currentLocale = useLocale();
  const pathname = usePathname();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return { currentLocale, handleChange };
}