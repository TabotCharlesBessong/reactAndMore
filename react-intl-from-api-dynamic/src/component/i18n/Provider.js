
import { IntlProvider } from "react-intl";
import {LOCALES} from './constants'
import { Fragment } from "react";
import messages  from "./messages";

const Provider = ({ children, locale = LOCALES.ENGLISH}) => {
  <IntlProvider textComponent={Fragment} locale={locale} messages={messages[locale]} >
    {children}
  </IntlProvider>
}

export default Provider