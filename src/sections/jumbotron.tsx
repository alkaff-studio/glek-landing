import React from 'react'
import Image from '../components/img'

const SectionJumbotron = () => (
    <section id="section-jumbotron" className="section">
        <div className="jumbotron-element">
            <div className="element-1">
                <Image src="el-jumbotron-01.png" />
            </div>
            <div className="element-2">
                <Image src="el-jumbotron-02.png" />
            </div>
        </div>
        <div className="jumbotron-content">
            <div className="container-fluid px-0">
                <div className="row no-gutters align-items-stretch justify-content-start">
                    <div className="col-12 col-md-6 order-last order-md-first">
                        <div className="jumbotron-container ml-md-5 pl-md-5">
                            <h1 className="typo-display-md-bold typo-gray-body">Hausnya Hilang Berkahnya Datang</h1>
                            <p className="typo-text-md typo-gray-label">Berniaga Dengan Allah. 51% Keuntungan untuk Sedekah</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-first order-md-last">
                        <div className="jumbotron-splash"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default SectionJumbotron