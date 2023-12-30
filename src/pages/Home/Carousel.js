import React, { Component } from 'react'
export default class Carousel extends Component {
    render() {
        let carouselCaptionCat = {
            dtop: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }

        return (
            

            <div id="carouselExampleCaptions" className="carousel slide .container-fluid" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images5.alphacoders.com/321/thumb-1920-321584.jpg" className="d-block w-100" alt="cat" />
                        <div style={carouselCaptionCat} className="carousel-caption d-none d-md-block">
                            <h1>Mèo Con</h1>
                            <p>Con Mèo cute phô mai que</p>
                            <button type='button' className='btn btn-outline-danger'>MORE</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://allimages.sgp1.digitaloceanspaces.com/tipeduvn/2022/09/1662035297_380_Top-50-hinh-nen-meo-con-de-thuong-va-dang.jpg   " className="d-block w-100" alt="cat-3"/>
                        <div style={carouselCaptionCat} className="carousel-caption d-none d-md-block">
                            <h1>Mèo Con 2</h1>
                            <p>Con Mèo cute phô mai que nore nore noree oerere</p>
                            <button type='button' className='btn btn-outline-danger'>MORE</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images5.alphacoders.com/321/thumb-1920-321584.jpg" className="d-block w-100" alt="cat-3" />
                        <div style={carouselCaptionCat} className="carousel-caption d-none d-md-block">
                            <h1>Mèo Con 3</h1>
                            <p>Con Mèo cute phô mai que vip vip vip aaaaaaa</p>
                            <button type='button' className='btn btn-outline-danger'>MORE</button>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

        )
    }
}
