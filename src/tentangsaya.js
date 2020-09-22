import React from 'react'
import Media from './Components/Media'; 
import Carousel from 'react-bootstrap/Carousel'

class TentangSaya extends React.Component{
    render(){
        return(
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <Media image="logo.png">  
                        <h1 class="display-4">SMK Telkom Malang</h1>
                        <p class="lead">Manajemen SMK Telkom malang berkomitmen untuk memberikan pelayanan jasa pendidikan yang bermutu tinggi dengan menggunakan Sistem Manajemen Mutu ISO 9001:2015 SMK dengan melibatkan seluruh komponen sekolah yang ada dengan mengembangkan kepribadian yang memiliki jiwa MOKLET.</p>
                        </Media>     
                    </div>
                </div>

                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + 'image/sekolah1.jpg'}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + 'image/sekolah2.jpg'}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={process.env.PUBLIC_URL + 'image/sekolah3.jpg'}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel><br/>


                <div class="con">
                    <div class="footer">
                        <p>Adhitya Izza Mahendra</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default TentangSaya;