import { I18nextProvider, useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Link from 'next/link';

// utils:
import '../styles/globals.css';
import i18n from '../../i18n';

// app wrapper::
function MyApp({ Component, pageProps }: AppProps) {
  const { i18n: _i18n } = useTranslation();
  const [lang, setLang] = useState<string>('en');

  useEffect(() => {
    _i18n.changeLanguage(lang);
    if (lang === 'ar') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [_i18n, lang]);

  return (
    <I18nextProvider i18n={i18n}>
      {/* this not the best place for the container */}
      <main className="container">
        {/* consider this is the header */}
        <h3>
          <Link href="/test">
            <a>Go to test page</a>
          </Link>
        </h3>
        <section className="language-handler">
          <select id="langSelector" onChange={(e) => setLang(e.target.value)}>
            <option value="en">English (EN)</option>
            <option value="ar">Arabic (AR)</option>
            <option value="jp">Japanese (JP)</option>
            <option value="de">Deutsch (DE)</option>
          </select>
        </section>

        {/* the rest of the app */}
        <Component {...pageProps} />
      </main>
    </I18nextProvider>
  );
}
export default MyApp;
