import React from 'react'
import Media from './Components/Media'; 
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class Beranda extends React.Component{
    render(){
        return(
            <div>

                

                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <Media image="adiwiyata.png">  
                        <h1 class="display-4">Adiwiyata</h1>
                        <p class="lead">Peraturan Menteri Lingkungan Hidup Republik Indonesia Nomor 05 pada Tahun 2013 tentang Pedoman Pelaksanaan Program Adiwiyata menyatakan bahwa sekolah adiwiyata merupakan sekolah yang peduli serta berbudaya lingkungan dan juga program adiwiyata ialah suatu program untuk dapat mewujudkan sekolah yang peduli serta juga berbudaya lingkungan.</p>
                        </Media>     
                    </div>
                </div>

                <div class="con">
                    <div class="bg">
                        <p>Adiwiyata SMK Telkom Malang</p>
                    </div>
                </div><br/>

                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + 'image/image1.png'}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + 'image/image2.png'}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + 'image/image3.png'}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel><br/>
                
                

                <Container>
                    
                    <Row>
                        <Col> 
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + 'image/image2.png'} />
                            <Card.Body>
                                <Card.Title>Pelatihan pengolahan Kompos</Card.Title>
                                <Card.Text>
                                Pelatihan ini diadakan dengan tujuan adar siswa siswi mengerti akan pengolahan limbah yang di hasilkan
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + 'image/image1.png'} />
                            <Card.Body>
                                <Card.Title>Pelatihan siswa terhadap perawatan lingkungan</Card.Title>
                                <Card.Text>
                                agar lingkungan menjadi asri tentunya harus di rawat dengan benar kan, maka dari itu ppihak sekolah melatih beberapa siswa untuk bisa merawat lingkungan tersebut
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + 'image/image3.png'} />
                            <Card.Body>
                                <Card.Title>Penanaman Tenaman di area sekolah</Card.Title>
                                <Card.Text>
                                tentunya dengan adanya banyak tanaman akan sangat berguna terhadap lingkungan sekolah tersebut
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container><br/>

                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Adiwiyata Kita</h1>
                        <p class="lead">SMK Telkom Malang juga merupakan sekolah adiwiyata yang menerapkan prinsip sekolah hijau, hal tersebut semakin memberikan suasana yang nyaman bagi warga sekolah.</p>
                        
                    </div>
                </div><br/><br/><br/>
                
                <div class="con">
                    <Card>
                        <Card.Header>Nature</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                “Look deep into nature, and then you will understand everything better.” {' '}
                            </p>
                            <footer className="blockquote-footer">
                            Albert Einstein
                            </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div><br/><br/><br/>

                <div class="con">
                    <div class="footer">
                        <p>Adhitya Izza Mahendra</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Beranda;