import { Inter, Roboto, Lora  } from "next/font/google";
import localFont from 'next/font/local'


export const localLight = localFont({ src: './MyriadPro-Light.otf' })
export const localconden= localFont({ src: './MyriadPro-cond.otf' })


export const inter = Inter({ subsets: ["latin"] });

export const roboto = Roboto({ subsets: ["latin"], weight: ['400'] });

export const lora = Lora({ subsets: ["latin"], weight: ['400'] });