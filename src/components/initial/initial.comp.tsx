// pkgs:
import { useTranslation } from 'react-i18next';

// component::
const InitialComp = () => {
  const { t } = useTranslation();

  return (
    <div className="initial-comp">
      <h1>{t('paragraph')}</h1>
      <h2 className="author-name">
        {t('author.title')}: <b>{t('author.value')}</b>
      </h2>

      <section className="description">
        <h3>{t('description.title')}</h3>
        <p>{t('description.value')}</p>
      </section>
    </div>
  );
};

export default InitialComp;
