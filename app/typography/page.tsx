'use client';

import Container from '@/components/layout/container';
import { Row, Col, Divider, Input, Table, Tag, Flex, Form, ConfigProvider } from 'antd';
import Link from 'next/link';
import { Title, Paragraph, Button, Space, Card, Text } from '../../components/theme/antd-ui';
import { DownloadOutlined, SearchOutlined, PoweroffOutlined, MailOutlined, } from '@ant-design/icons';


// Örnek tablo verileri
const columns = [
    { title: 'Ad', dataIndex: 'name', key: 'name' },
    {
        title: 'Durum',
        dataIndex: 'status',
        key: 'status',
        render: (s: string) => <Tag color="blue">{s}</Tag>,
    },
    { title: 'Değer', dataIndex: 'value', key: 'value' },
];

const dataSource = [
    { key: '1', name: 'Ayarlar', status: 'Aktif', value: '100' },
    { key: '2', name: 'Tema', status: 'Beklemede', value: '250' },
];

export default function TypographyTestPage() {
    return (
        <Container>
            <Row gutter={[24, 24]}>
                <Col span={24}>
                    <Card title="Typography Örnekleri" className="section-card">
                        <Row gutter={[24, 24]}>
                            <Col xs={24} lg={12}>
                                <h1 className='my-0'>Heading 1</h1>
                                <h2 className='my-0'>Heading 2</h2>
                                <h3 className='my-0'>Heading 3</h3>
                                <h4 className='my-0'>Heading 4</h4>
                                <h5 className='my-0'>Heading 5</h5>
                                <hr />
                                <Row>
                                    <Col md={12}>
                                        <p className='p-sm p-6 color-primary my-0'>Primary</p>
                                        <p className='p-sm p-6 color-secondary my-0'>Secondary</p>
                                        <p className='p-sm p-6 color-success my-0'>Success</p>
                                        <p className='p-sm p-6 color-warning my-0'>Warning</p>
                                        <p className='p-sm p-6 color-error my-0'>Error</p>
                                        <p className='p-sm p-6 color-info my-0'>Info</p>
                                        <p className='p-sm p-6 color-link my-0'>Link</p>
                                        <p className='p-sm p-6 color-white my-0 bg-black'>White</p>
                                        <p className='p-sm p-6 color-black my-0'>Black</p>
                                    </Col>
                                    <Col md={12}>
                                        <p className='my-0 p-6 bg-primary color-white'>Primary</p>
                                        <p className='my-0 p-6 bg-secondary color-white'>Secondary</p>
                                        <p className='my-0 p-6 bg-success color-white'>Success</p>
                                        <p className='my-0 p-6 bg-warning color-white'>Warning</p>
                                        <p className='my-0 p-6 bg-error color-white'>Error</p>
                                        <p className='my-0 p-6 bg-info color-white'>Info</p>
                                        <p className='my-0 p-6 bg-link color-white'>Link</p>
                                        <p className='my-0 p-6 bg-white color-black'>White</p>
                                        <p className='my-0 p-6 bg-black color-white'>Black</p>
                                    </Col>
                                </Row>

                            </Col>
                            <Col xs={24} lg={12}>
                                <h3 className='my-0'>Paragraph</h3>
                                <p className='p-sm mb-18'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className='mb-18'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className='p-lg mb-18'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className='p-xl mb-18'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr />
                                <h4 className='my-0'>Color Secondary</h4>
                                <p className='color-text-secondary mt-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <h4 className='my-0'>Color Tertiary</h4>
                                <p className='color-text-tertiary my-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col span={24}>
                    <Card title="Primary Colors" className="section-card">
                        <Row gutter={[24, 24]}>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-primary-1'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-primary-2'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-primary-3'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-primary-4'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-primary-5'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-primary-6'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-primary-7'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-primary-8'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-primary-9'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-primary-10'></div>
                            </Col>
                        </Row>
                    </Card>
                    <Card title="Secondary Colors" className="section-card">
                        <Row gutter={[24, 24]}>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-secondary-1'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-secondary-2'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-secondary-3'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-secondary-4'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-secondary-5'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-secondary-6'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-secondary-7'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-secondary-8'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-secondary-9'></div>
                            </Col>
                            <Col flex='auto'>
                                <div className='p-12 d-block bg-secondary-10'></div>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                {/* Button Section */}
                <Col span={24}>
                    <Card title="Butonlar: Renkler, Varyantlar ve İkonlar" className="section-card">
                        <Space orientation="vertical" size="large" style={{ width: '100%' }}>

                            <Divider orientation="horizontal">Round Button</Divider>

                            <section>
                                <Flex vertical gap="small">
                                    <Flex gap="small" wrap>
                                        <Button color="default" variant="solid" shape="round">
                                            Default Solid
                                        </Button>
                                        <Button color="default" variant="outlined" shape="round">
                                            Default Outlined
                                        </Button>
                                        <Button color="default" variant="dashed" shape="round">
                                            Default Dashed
                                        </Button>
                                        <Button color="default" variant="filled" shape="round">
                                            Default Filled
                                        </Button>
                                        <Button color="default" variant="text" shape="round">
                                            Default Text
                                        </Button>
                                        <Button color="default" variant="link" shape="round">
                                            Default Link
                                        </Button>
                                    </Flex>
                                    <Flex gap="small" wrap>
                                        <Button color="primary" variant="solid" shape="round">
                                            Default Solid
                                        </Button>
                                        <Button color="primary" variant="outlined" shape="round">
                                            Default Outlined
                                        </Button>
                                        <Button color="primary" variant="dashed" shape="round">
                                            Default Dashed
                                        </Button>
                                        <Button color="primary" variant="filled" shape="round">
                                            Default Filled
                                        </Button>
                                        <Button color="primary" variant="text" shape="round">
                                            Default Text
                                        </Button>
                                        <Button color="primary" variant="link" shape="round">
                                            Default Link
                                        </Button>
                                    </Flex>
                                </Flex>
                            </section>

                            <Divider orientation="horizontal">Default Button</Divider>

                            <section>
                                <ConfigProvider>
                                    <Flex vertical gap="small">
                                        <Flex gap="small" wrap>
                                            <Button color="default" variant="solid">
                                                Default Solid
                                            </Button>
                                            <Button color="default" variant="outlined">
                                                Default Outlined
                                            </Button>
                                            <Button color="default" variant="dashed">
                                                Default Dashed
                                            </Button>
                                            <Button color="default" variant="filled">
                                                Default Filled
                                            </Button>
                                            <Button color="default" variant="text">
                                                Default Text
                                            </Button>
                                            <Button color="default" variant="link">
                                                Default Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="primary" variant="solid">
                                                Primary Solid
                                            </Button>
                                            <Button color="primary" variant="outlined">
                                                Primary Outlined
                                            </Button>
                                            <Button color="primary" variant="dashed">
                                                Primary Dashed
                                            </Button>
                                            <Button color="primary" variant="filled">
                                                Primary Filled
                                            </Button>
                                            <Button color="primary" variant="text">
                                                Primary Text
                                            </Button>
                                            <Button color="primary" variant="link">
                                                Primary Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="danger" variant="solid">
                                                Danger Solid
                                            </Button>
                                            <Button color="danger" variant="outlined">
                                                Danger Outlined
                                            </Button>
                                            <Button color="danger" variant="dashed">
                                                Danger Dashed
                                            </Button>
                                            <Button color="danger" variant="filled">
                                                Danger Filled
                                            </Button>
                                            <Button color="danger" variant="text">
                                                Danger Text
                                            </Button>
                                            <Button color="danger" variant="link">
                                                Danger Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="blue" variant="solid">
                                                Blue Solid
                                            </Button>
                                            <Button color="blue" variant="outlined">
                                                Blue Outlined
                                            </Button>
                                            <Button color="blue" variant="dashed">
                                                Blue Dashed
                                            </Button>
                                            <Button color="blue" variant="filled">
                                                Blue Filled
                                            </Button>
                                            <Button color="blue" variant="text">
                                                Blue Text
                                            </Button>
                                            <Button color="blue" variant="link">
                                                Blue Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="purple" variant="solid">
                                                Purple Solid
                                            </Button>
                                            <Button color="purple" variant="outlined">
                                                Purple Outlined
                                            </Button>
                                            <Button color="purple" variant="dashed">
                                                Purple Dashed
                                            </Button>
                                            <Button color="purple" variant="filled">
                                                Purple Filled
                                            </Button>
                                            <Button color="purple" variant="text">
                                                Purple Text
                                            </Button>
                                            <Button color="purple" variant="link">
                                                Purple Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="cyan" variant="solid">
                                                Cyan Solid
                                            </Button>
                                            <Button color="cyan" variant="outlined">
                                                Cyan Outlined
                                            </Button>
                                            <Button color="cyan" variant="dashed">
                                                Cyan Dashed
                                            </Button>
                                            <Button color="cyan" variant="filled">
                                                Cyan Filled
                                            </Button>
                                            <Button color="cyan" variant="text">
                                                Cyan Text
                                            </Button>
                                            <Button color="cyan" variant="link">
                                                Cyan Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="green" variant="solid">
                                                Green Solid
                                            </Button>
                                            <Button color="green" variant="outlined">
                                                Green Outlined
                                            </Button>
                                            <Button color="green" variant="dashed">
                                                Green Dashed
                                            </Button>
                                            <Button color="green" variant="filled">
                                                Green Filled
                                            </Button>
                                            <Button color="green" variant="text">
                                                Green Text
                                            </Button>
                                            <Button color="green" variant="link">
                                                Green Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="magenta" variant="solid">
                                                Magenta Solid
                                            </Button>
                                            <Button color="magenta" variant="outlined">
                                                Magenta Outlined
                                            </Button>
                                            <Button color="magenta" variant="dashed">
                                                Magenta Dashed
                                            </Button>
                                            <Button color="magenta" variant="filled">
                                                Magenta Filled
                                            </Button>
                                            <Button color="magenta" variant="text">
                                                Magenta Text
                                            </Button>
                                            <Button color="magenta" variant="link">
                                                Magenta Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="cyan" variant="solid">
                                                Cyan Solid
                                            </Button>
                                            <Button color="cyan" variant="outlined">
                                                Cyan Outlined
                                            </Button>
                                            <Button color="cyan" variant="dashed">
                                                Cyan Dashed
                                            </Button>
                                            <Button color="cyan" variant="filled">
                                                Cyan Filled
                                            </Button>
                                            <Button color="cyan" variant="text">
                                                Cyan Text
                                            </Button>
                                            <Button color="cyan" variant="link">
                                                Cyan Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="pink" variant="solid">
                                                Pink Solid
                                            </Button>
                                            <Button color="pink" variant="outlined">
                                                Pink Outlined
                                            </Button>
                                            <Button color="pink" variant="dashed">
                                                Pink Dashed
                                            </Button>
                                            <Button color="pink" variant="filled">
                                                Pink Filled
                                            </Button>
                                            <Button color="pink" variant="text">
                                                Pink Text
                                            </Button>
                                            <Button color="pink" variant="link">
                                                Pink Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="red" variant="solid">
                                                Red Solid
                                            </Button>
                                            <Button color="red" variant="outlined">
                                                Red Outlined
                                            </Button>
                                            <Button color="red" variant="dashed">
                                                Red Dashed
                                            </Button>
                                            <Button color="red" variant="filled">
                                                Red Filled
                                            </Button>
                                            <Button color="red" variant="text">
                                                Red Text
                                            </Button>
                                            <Button color="red" variant="link">
                                                Red Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="orange" variant="solid">
                                                Orange Solid
                                            </Button>
                                            <Button color="orange" variant="outlined">
                                                Orange Outlined
                                            </Button>
                                            <Button color="orange" variant="dashed">
                                                Orange Dashed
                                            </Button>
                                            <Button color="orange" variant="filled">
                                                Orange Filled
                                            </Button>
                                            <Button color="orange" variant="text">
                                                Orange Text
                                            </Button>
                                            <Button color="orange" variant="link">
                                                Orange Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="yellow" variant="solid">
                                                Yellow Solid
                                            </Button>
                                            <Button color="yellow" variant="outlined">
                                                Yellow Outlined
                                            </Button>
                                            <Button color="yellow" variant="dashed">
                                                Yellow Dashed
                                            </Button>
                                            <Button color="yellow" variant="filled">
                                                Yellow Filled
                                            </Button>
                                            <Button color="yellow" variant="text">
                                                Yellow Text
                                            </Button>
                                            <Button color="yellow" variant="link">
                                                Yellow Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="volcano" variant="solid">
                                                Volcano Solid
                                            </Button>
                                            <Button color="volcano" variant="outlined">
                                                Volcano Outlined
                                            </Button>
                                            <Button color="volcano" variant="dashed">
                                                Volcano Dashed
                                            </Button>
                                            <Button color="volcano" variant="filled">
                                                Volcano Filled
                                            </Button>
                                            <Button color="volcano" variant="text">
                                                Volcano Text
                                            </Button>
                                            <Button color="volcano" variant="link">
                                                Volcano Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="geekblue" variant="solid">
                                                Geekblue Solid
                                            </Button>
                                            <Button color="geekblue" variant="outlined">
                                                Geekblue Outlined
                                            </Button>
                                            <Button color="geekblue" variant="dashed">
                                                Geekblue Dashed
                                            </Button>
                                            <Button color="geekblue" variant="filled">
                                                Geekblue Filled
                                            </Button>
                                            <Button color="geekblue" variant="text">
                                                Geekblue Text
                                            </Button>
                                            <Button color="geekblue" variant="link">
                                                Geekblue Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="lime" variant="solid">
                                                Lime Solid
                                            </Button>
                                            <Button color="lime" variant="outlined">
                                                Lime Outlined
                                            </Button>
                                            <Button color="lime" variant="dashed">
                                                Lime Dashed
                                            </Button>
                                            <Button color="lime" variant="filled">
                                                Lime Filled
                                            </Button>
                                            <Button color="lime" variant="text">
                                                Lime Text
                                            </Button>
                                            <Button color="lime" variant="link">
                                                Lime Link
                                            </Button>
                                        </Flex>
                                        <Flex gap="small" wrap>
                                            <Button color="gold" variant="solid">
                                                Gold Solid
                                            </Button>
                                            <Button color="gold" variant="outlined">
                                                Gold Outlined
                                            </Button>
                                            <Button color="gold" variant="dashed">
                                                Gold Dashed
                                            </Button>
                                            <Button color="gold" variant="filled">
                                                Gold Filled
                                            </Button>
                                            <Button color="gold" variant="text">
                                                Gold Text
                                            </Button>
                                            <Button color="gold" variant="link">
                                                Gold Link
                                            </Button>
                                        </Flex>
                                    </Flex>
                                </ConfigProvider>
                            </section>

                            <Divider orientation="horizontal">İkonlar ve Yükleme Durumları</Divider>

                            <section>
                                <div className="button-group-margin">
                                    <Space wrap>
                                        <Button type="primary" icon={<SearchOutlined />} iconPlacement='start'>Ara</Button>
                                        <Button type='primary' icon={<DownloadOutlined />}>İndir</Button>
                                        <Space wrap>
                                            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                                            <Button type="primary" loading>Yükleniyor</Button>
                                        </Space>
                                        <Button
                                            type="primary"
                                            icon={<PoweroffOutlined />}
                                        >
                                            Tıklayınız!
                                        </Button>
                                        <Button type="primary" icon={<SearchOutlined />} iconPlacement='end'>Ara</Button>
                                    </Space>
                                </div>
                            </section>


                        </Space>
                    </Card>
                </Col>

                {/* Form Section */}
                <Col span={24}>
                    <Card title="Form: Varyantlar, Boyutlar ve Doğrulama" className="section-card">
                        <Form
                            layout="vertical"
                            initialValues={{ variant: 'filled' }}
                            className="form-container"
                        >
                            <Row gutter={24}>
                                <Col span={12}>
                                    <Text strong>Form Variants</Text>
                                    <Form.Item label="Outlined (Default)" name="v1">
                                        <Input placeholder="Outlined" variant="outlined" />
                                    </Form.Item>
                                    <Form.Item label="Filled" name="v2">
                                        <Input placeholder="Filled" variant="filled" />
                                    </Form.Item>
                                    <Form.Item label="Borderless" name="v3">
                                        <Input placeholder="Borderless" variant="borderless" />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Text strong>Form Size</Text>
                                    <div className="form-size-section">
                                        <Space orientation="vertical" style={{ width: '100%' }}>
                                            <Input size="small" placeholder="Small size" prefix={<MailOutlined />} />
                                            <Input placeholder="Default size" prefix={<MailOutlined />} />
                                            <Input size="large" placeholder="Large size" prefix={<MailOutlined />} />
                                        </Space>
                                    </div>
                                </Col>
                            </Row>

                            <Divider orientation="horizontal">Özel Doğrulama Durumları</Divider>

                            <Row gutter={24} className="validation-section">
                                <Col span={12}>
                                    <Form.Item
                                        label="Hata"
                                        validateStatus="error"
                                        help="Bu alan hatalı giriş içeriyor"
                                    >
                                        <Input placeholder="Hatalı seçim" id="error1" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Başarı" hasFeedback validateStatus="success">
                                        <Input placeholder="Geçerli değer" id="success" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Uyarı" hasFeedback validateStatus="warning">
                                        <Input placeholder="Uyarı" id="warning" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Doğrulanıyor"
                                        hasFeedback
                                        validateStatus="validating"
                                        help="Bilgiler kontrol ediliyor..."
                                    >
                                        <Input placeholder="Kontrol ediliyor" id="validating" />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>

                {/* Data Section */}
                <Col span={24}>
                    <Card title="Veri Tabloları">
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            pagination={false}
                            size="middle"
                        />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}