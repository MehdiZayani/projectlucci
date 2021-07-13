import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { config } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";
import 'tailwindcss/tailwind.css';

import AOS from "aos";

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps)
{
  useEffect(() => AOS.init(), []);
  
  return <Component {...pageProps} />
}
