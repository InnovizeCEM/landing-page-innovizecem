import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import tailwindcss from '@tailwindcss/vite'


const nextConfig: NextConfig = {
    plugins: [
        tailwindcss(),
  ],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);