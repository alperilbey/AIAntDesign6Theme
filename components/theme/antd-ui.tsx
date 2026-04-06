'use client';

// Bu dosya, Ant Design bileşenlerini Sunucu Bileşenlerinde (Server Components) 
// hata almadan kullanabilmek için bir köprü görevi görür.

import { Typography, Button, Space, Card, ConfigProvider } from 'antd';

// Nokta notasyonu olan bileşenleri parçalayıp tekil olarak dışa aktarıyoruz
export const Title = Typography.Title;
export const Paragraph = Typography.Paragraph;
export const Text = Typography.Text;

// Diğer standart bileşenleri doğrudan dışa aktarıyoruz
export { Button, Space, Card, ConfigProvider };