import { useTranslation } from 'react-i18next';

const TestPage = () => {
  const { t } = useTranslation();
  return <h1>{t('paragraph')}</h1>;
};

export default TestPage;
