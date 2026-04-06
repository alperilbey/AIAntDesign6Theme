import { AntdRegistry } from '@ant-design/nextjs-registry';
import ThemeProvider from "@/components/providers/ThemeProvider";
import Preloader from "@/components/layout/preloader";
import "../styles/main.scss";

export default function RootLayout({ children }: any) {

  return (
    <html lang="tr">
      <body>
        <AntdRegistry>
          <ThemeProvider theme="param">
            <Preloader />
            {children}
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}