import { StyleProvider } from "@ant-design/cssinjs";
import { App, ConfigProvider } from "antd";
import zhTW from "antd/es/locale/zh_TW";
import "dayjs/locale/zh-TW";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { theme } from "./theme";

interface Props {
  children?: React.ReactNode;
  container: HTMLElement;
}

export const Providers = ({ container, children }: Props) => {
  useEffect(() => {
    document.documentElement.lang = "zh-Hant-TW";
  });
  return (
    <ConfigProvider
      getPopupContainer={() => container}
      locale={zhTW}
      theme={theme}
    >
      <StyleProvider hashPriority="high">
        <App>{children}</App>
      </StyleProvider>
    </ConfigProvider>
  );
};
