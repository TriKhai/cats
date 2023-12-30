import React, { Component } from 'react'

export default class Welcom extends Component {
    render() {
        const wrapW = {
            padding: '80px 15px',
            maxwidth: '1140px',
            margin: '0 auto',
        }
        const colorTextT = {
            color: '#ff4f81'
        }

        const bgColorT = {
            
        }
        return (
            <div className='welcom text-center container' style={wrapW}>
                <div className='welcom__tile'>
                    <h1>WEOCOM</h1>
                    <p>Chào mừng đến với web của tôi</p>
                </div>
                <div className='welcom__table container'>
                    <div class="row">
                        <div class="col-4 text-center border border-dark" style={bgColorT}>
                            <h3 style={colorTextT}>Mèo Mun</h3>
                            <h6>Thuộc tính</h6>
                            <p>Lông đen</p>
                            <h6>Bản năng</h6>
                            <p>Ngủ 24/24</p>
                        </div>
                        <div class="col-4 text-center border border-dark" style={bgColorT}>
                            <h3 style={colorTextT}>Mèo Mun</h3>
                            <h6>Thuộc tính</h6>
                            <p>Lông đen</p>
                            <h6>Bản năng</h6>
                            <p>Ngủ 24/24</p>
                        </div>
                        <div class="col-4 text-center border border-dark" style={bgColorT}>
                            <h3 style={colorTextT}>Mèo Mun</h3>
                            <h6>Thuộc tính</h6>
                            <p>Lông đen</p>
                            <h6>Bản năng</h6>
                            <p>Ngủ 24/24</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
