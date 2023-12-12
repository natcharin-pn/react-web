import React, { useState } from 'react';
import Snowfall from 'react-snowfall';
import santajpg from '../assets/santa.jpg'; 
import reindeer from '../assets/rd.png'; 
import Jj from './jj';
import { Button, Input, Card, Row, Col, Typography } from 'antd';

function Home() {
    const { Title, Paragraph, Text } = Typography;
    const [count, setCount] = useState(0);
    const [showSnow, setShowSnow] = useState(true);
    const [showImage, setShowImage] = useState(true);
    const [allwich, setAllwich] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isFloating, setIsFloating] = useState(false);

    const handleButtonClick = () => {
        setCount(count + 1);
        setAllwich(previousAllwich => [...previousAllwich, inputValue]);
        setInputValue('');
        setIsFloating(true);
    };

    const handleStopSnow = () => {
        setShowSnow(false);
    };

     return (
        <>
            {showSnow && <Snowfall />}                
            {isFloating && <img src={reindeer} alt="Floating Image" className="floating-image" />}
            <div className='center'>
                {showImage && <img src={santajpg} alt="Santa Claus" style={{ maxWidth: '200px', marginBottom: '20px' }} />}
                <Title>Welcome to Christmas Day</Title>
                <Title level={2}>Hi my name is NATCHARIN PAIYAPHOSRI Internship at Touch Devhub DAY 3</Title>
                <Jj data={inputValue} />
                <Paragraph>จำนวนการอธิฐานทั้งหมด {allwich.length} ครั้ง</Paragraph>
                <Card style={{ width: '40%' }}>
                    <Paragraph>
                        คำอธิฐานทั้งหมด: 
                        {allwich.map((item, index) => (
                            <Text key={index} display="block">ลำดับที่ {index + 1}: {item}</Text>
                        ))}
                    </Paragraph>
                </Card>
                <Row gutter={[16]} style={{ width: '100%', marginTop: '20px', justifyContent: 'center' }}>
                    <Col span={7} />
                    <Col span={8}>
                        <Input 
                            value={inputValue} 
                            onChange={e => setInputValue(e.target.value)} 
                            placeholder="Enter your wish" 
                            style={{  width: '100%', marginRight: '10px' }}  
                        />
                    </Col>
                    <Col span={8} style={{ textAlign: 'left' }}>
                        <Button type="primary" onClick={handleButtonClick}>Make a Wish</Button>
                    </Col>
                </Row>
                <Button onClick={handleStopSnow} style={{ marginTop: '20px' }}>Stop Snow</Button>
                <Paragraph>Christmas clicked {count} times</Paragraph>
            </div>
        </>
    );
}

export default Home;
