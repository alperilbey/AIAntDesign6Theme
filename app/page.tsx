import Container from '@/components/layout/container';
import { Title, Paragraph } from '../components/theme/antd-ui';
import { Col, Row, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className='main'>
      <section className="section-padding bg-secondary">
        <Container>
          <Row gutter={[24, 48]} align='middle'>
            <Col md={14} span={24}>
              <h2 className="color-white mb-12">Verify Identities in Minutes. Reduce Fraud From Day One.</h2>
              <p className="color-white fw-300 mb-30 p-lg">idNext is an AI-powered, Turkey’s FIU (MASAK)-compliant Digital KYC platform that verifies customers in seconds and dramatically reduces fraud.</p>
              <p className="color-white fw-300 mb-30 p-lg">Built on ParamTech’s high-scale fintech infrastructure, it delivers faster onboarding and full regulatory compliance—out of the box.</p>
              <Button color="primary" variant="solid" shape="round" icon={<ArrowRightOutlined />} iconPlacement='end'>Bize Ulaşın</Button>
            </Col>
            <Col md={10} span={24} className="text-center d-none d-sm-inline-block">
              <Image
                width="400"
                height="400"
                className='img-fluid'
                priority={true}
                src='/images/idnext-hero-element.png'
                alt=''
              />
            </Col>
          </Row>
        </Container>
      </section>
      <Container>

        <section className="section-padding-light">
          <h2 className="color-text text-center mb-30">Digital Onboarding in 2.5 Minutes</h2>
          <div className="bg-secondary radius-16 section-padding-light">
            <Row gutter={[24, 24]}>
              <Col md={8} sm={24} span={24} className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="60" viewBox="0 0 74 60" fill="none">
                  <path d="M36.1919 0.690983C36.4913 -0.230327 37.7947 -0.230328 38.094 0.690983L42.3396 13.7573C42.4734 14.1693 42.8574 14.4483 43.2906 14.4483H57.0294C57.9981 14.4483 58.4009 15.6879 57.6171 16.2573L46.5023 24.3327C46.1518 24.5874 46.0051 25.0388 46.139 25.4508L50.3845 38.5171C50.6838 39.4384 49.6294 40.2045 48.8457 39.6351L37.7308 31.5597C37.3803 31.3051 36.9057 31.3051 36.5552 31.5597L25.4403 39.6351C24.6566 40.2045 23.6021 39.4384 23.9015 38.5171L28.147 25.4508C28.2809 25.0388 28.1342 24.5874 27.7837 24.3327L16.6688 16.2573C15.8851 15.6879 16.2879 14.4483 17.2566 14.4483H30.9954C31.4286 14.4483 31.8125 14.1693 31.9464 13.7573L36.1919 0.690983Z" fill="white" />
                  <path d="M7.52163 44.2275C7.6713 43.7668 8.32301 43.7668 8.47268 44.2275L10.0178 48.9828C10.0847 49.1888 10.2767 49.3283 10.4933 49.3283H15.4934C15.9777 49.3283 16.1791 49.9481 15.7872 50.2328L11.7421 53.1717C11.5669 53.2991 11.4936 53.5247 11.5605 53.7307L13.1056 58.4861C13.2553 58.9467 12.728 59.3298 12.3362 59.0451L8.29105 56.1061C8.1158 55.9788 7.87851 55.9788 7.70326 56.1061L3.65814 59.0451C3.26629 59.3298 2.73905 58.9467 2.88872 58.4861L4.43382 53.7307C4.50076 53.5247 4.42743 53.2991 4.25218 53.1717L0.207065 50.2328C-0.184792 49.9481 0.0165978 49.3283 0.50096 49.3283H5.501C5.71761 49.3283 5.90959 49.1888 5.97653 48.9828L7.52163 44.2275Z" fill="white" />
                  <path d="M27.0241 44.1472C27.1783 43.6962 27.816 43.6962 27.9702 44.1472L29.6266 48.9901C29.6958 49.1924 29.8859 49.3283 30.0997 49.3283H35.4031C35.8936 49.3283 36.0908 49.9611 35.6871 50.2398L31.4415 53.1702C31.2572 53.2974 31.1799 53.5316 31.2524 53.7435L32.8844 58.5151C33.0404 58.9712 32.524 59.3622 32.1273 59.0884L27.7812 56.0886C27.6102 55.9706 27.3841 55.9706 27.2131 56.0886L22.8671 59.0884C22.4703 59.3622 21.9539 58.9712 22.1099 58.5151L23.7419 53.7435C23.8144 53.5316 23.7371 53.2974 23.5528 53.1702L19.3072 50.2398C18.9035 49.9611 19.1007 49.3283 19.5912 49.3283H24.8946C25.1084 49.3283 25.2985 49.1924 25.3677 48.9901L27.0241 44.1472Z" fill="white" />
                  <path d="M46.5216 44.2275C46.6713 43.7668 47.323 43.7668 47.4727 44.2275L49.0178 48.9828C49.0847 49.1888 49.2767 49.3283 49.4933 49.3283H54.4934C54.9777 49.3283 55.1791 49.9481 54.7872 50.2328L50.7421 53.1717C50.5669 53.2991 50.4936 53.5247 50.5605 53.7307L52.1056 58.4861C52.2553 58.9467 51.728 59.3298 51.3362 59.0451L47.291 56.1061C47.1158 55.9788 46.8785 55.9788 46.7033 56.1061L42.6581 59.0451C42.2663 59.3298 41.739 58.9467 41.8887 58.4861L43.4338 53.7307C43.5008 53.5247 43.4274 53.2991 43.2522 53.1717L39.2071 50.2328C38.8152 49.9481 39.0166 49.3283 39.501 49.3283H44.501C44.7176 49.3283 44.9096 49.1888 44.9765 48.9828L46.5216 44.2275Z" fill="white" />
                  <path d="M65.5216 44.2275C65.6713 43.7668 66.323 43.7668 66.4727 44.2275L68.0178 48.9828C68.0847 49.1888 68.2767 49.3283 68.4933 49.3283H73.4934C73.9777 49.3283 74.1791 49.9481 73.7872 50.2328L69.7421 53.1717C69.5669 53.2991 69.4935 53.5247 69.5605 53.7307L71.1056 58.4861C71.2553 58.9467 70.728 59.3298 70.3362 59.0451L66.291 56.1061C66.1158 55.9788 65.8785 55.9788 65.7033 56.1061L61.6581 59.0451C61.2663 59.3298 60.739 58.9467 60.8887 58.4861L62.4338 53.7307C62.5008 53.5247 62.4274 53.2991 62.2522 53.1717L58.2071 50.2328C57.8152 49.9481 58.0166 49.3283 58.501 49.3283H63.501C63.7176 49.3283 63.9096 49.1888 63.9765 48.9828L65.5216 44.2275Z" fill="white" />
                </svg>
                <h2 className="fw-500 color-white my-24">%85</h2>
                <p className="color-white fw-500 p-lg mx-auto mb-0">Automatic <br />Approval Rate</p>
              </Col>
              <Col md={8} sm={24} span={24} className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="52" viewBox="0 0 70 52" fill="none">
                  <path d="M12.7911 7.18404C12.7911 3.2072 15.9728 0 19.9752 0C23.952 0 27.1592 3.2072 27.1592 7.18404C27.1337 11.1867 23.9265 14.3681 19.9752 14.3681C15.9983 14.3681 12.7911 11.1609 12.7911 7.18404ZM52.418 37.9961H39.3828V26.3477C39.3828 20.6729 34.4237 16.0859 28.8438 16.0859H11.3711C5.24515 16.0859 -0.00275019 21.3943 2.32471e-05 26.625V47.9805C-0.00718769 50.347 1.66436 51.5829 3.32815 51.5859C4.99609 51.589 6.65627 50.3531 6.65627 47.9805V27.1797H8.87502V51.5859H30.5078V27.1797H32.7266L32.7491 41.1495C32.7344 43.5704 34.2306 44.6013 35.7774 44.6523H52.418C56.9562 44.6523 56.9562 37.9961 52.418 37.9961ZM67.4068 32.7279V12.3485H63.3054V32.7282H61.9306V16.8542H57.8292V32.7282H56.4428V24.6062H52.3414V32.7279H50.9666V28.5919H46.8653V32.7279H44.5431V10.6153H42.9883V34.3141H69.8906V32.7279H67.4068Z" fill="white" />
                </svg>
                <h2 className="fw-500 color-white my-24">%98</h2>
                <p className="color-white fw-500 p-lg mx-auto mb-0">Successful <br />Fraud Detection</p>
              </Col>
              <Col md={8} sm={24} span={24} className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="47" viewBox="0 0 65 47" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.32143 20.8929C1.03768 20.8929 0 21.9329 0 23.2143C0 24.498 1.03768 25.5357 2.32143 25.5357H18.5714V20.8929H2.32143ZM60.3571 0H23.2143C20.6514 0 18.5714 2.08 18.5714 4.64286V20.8929H52.4318L40.2605 8.72392C39.3551 7.81624 39.3551 6.34445 40.2605 5.44141C41.1659 4.53374 42.6377 4.53374 43.5453 5.44141L59.5609 21.4569C60.0438 21.9398 60.2504 22.5829 60.2179 23.2143C60.2504 23.8457 60.0438 24.4887 59.5609 24.9739L43.5453 40.9894C42.6377 41.8971 41.1659 41.8971 40.2605 40.9894C39.3551 40.0841 39.3551 38.6123 40.2605 37.7069L52.4318 25.5357H18.5714V41.7857C18.5714 44.3486 20.6514 46.4286 23.2143 46.4286H60.3571C62.92 46.4286 65 44.3486 65 41.7857V4.64286C65 2.08 62.92 0 60.3571 0Z" fill="white" />
                </svg>
                <h2 className="fw-500 color-white my-24">20K+</h2>
                <p className="color-white fw-500 p-lg mx-auto mb-0">Onboarding <br />Every Month</p>
              </Col>
            </Row>
          </div>
        </section>

        <section className="section-padding-light">
          <h2 className="color-neutral text-center">What idNext Delivers</h2>
          <p className="color-text-secondary text-center p-lg mb-30 fw-300">Purpose-built payment solutions for every sector</p>
          <div className="py-30">
            <Row gutter={[24, 24]} wrap={false}>
              <Col flex='none'>
                <Image src='/images/icon-secure-check.png' width={80} height={80} alt='' className='img-fluid' />
              </Col>
              <Col flex='auto'>
                <h4 className="mb-12">1. Data Capture (OCR & NFC)</h4>
                <p className="fw-300 mb-0 p-lg">The customer scans their ID card using the camera (OCR). Next, for maximum security, they tap the card against their smartphone to access chip data (NFC), ensuring instant verification.</p>
              </Col>
            </Row>
          </div>
          <hr />
          <div className="py-30">
            <Row gutter={[24, 24]} wrap={false}>
              <Col flex='none'>
                <Image src='/images/icon-secure-check.png' width={80} height={80} alt='' className='img-fluid' />
              </Col>
              <Col flex='auto'>
                <h4 className="mb-12">2. Liveness Detection (AI Liveness)</h4>
                <p className="fw-300 mb-0 p-lg">Our AI-driven biometric analysis prompts the user for simple facial gestures. This test confirms within seconds that the user is “live” and “real”; —providing robust protection against photo or video spoofing attacks.</p>
              </Col>
            </Row>
          </div>
          <hr />
          <div className="py-30">
            <Row gutter={[24, 24]} wrap={false}>
              <Col flex='none'>
                <Image src='/images/icon-secure-check.png' width={80} height={80} alt='' className='img-fluid' />
              </Col>
              <Col flex='auto'>
                <h4 className="mb-12">3. Verification & Approval</h4>
                <p className="fw-300 mb-0 p-lg">Captured data is cross-referenced with official databases such as NVI (MERNIS). An automatic approval rate of up to 85%, customers are instantly verified. Exceptions routed to Back office for manual review or to the MASAK-compliant “Video Call”; onboarding flow.</p>
              </Col>
            </Row>
          </div>
          <hr />
          <div className="py-30">
            <Row gutter={[24, 24]} wrap={false}>
              <Col flex='none'>
                <Image src='/images/icon-secure-check.png' width={80} height={80} alt='' className='img-fluid' />
              </Col>
              <Col flex='auto'>
                <h4 className="mb-12">4. Video KYC</h4>
                <p className="fw-300 mb-0 p-lg">The customer joins a secure video call where the agent verifies the ID on camera. AI instantly matches the live face with the ID and runs liveness checks, with the session recorded for compliance. The result is delivered immediately, allowing onboarding to continue.</p>
              </Col>
            </Row>
          </div>
          <hr />
          <div className="py-30">
            <Row gutter={[24, 24]} wrap={false}>
              <Col flex='none'>
                <Image src='/images/icon-secure-check.png' width={80} height={80} alt='' className='img-fluid' />
              </Col>
              <Col flex='auto'>
                <h4 className="mb-12">5. Hologram-Based ID Authentication</h4>
                <p className="fw-300 mb-0 p-lg">The system verifies the authenticity of Turkish ID cards by detecting the secure hologram patterns embedded on the document. Optical check confirms that the card is genuine and tamper-free, adding an extra layer of protection against forgery.</p>
              </Col>
            </Row>
          </div>
          <hr />
          <div className="delivers-table py-30">
            <Row gutter={[24, 24]} wrap={false}>
              <Col flex='none'>
                <Image src='/images/icon-secure-check.png' width={80} height={80} alt='' className='img-fluid' />
              </Col>
              <Col flex='auto'>
                <h4 className="mb-12">6. Unified Back-Office Control Center</h4>
                <p className="fw-300 mb-0 p-lg">A centralized panel where operators can monitor user actions in real time, review verification outcomes, and approve or reject cases with full audit visibility.</p>
              </Col>
            </Row>
          </div>
        </section>
      </Container>




    </div>
  );
}