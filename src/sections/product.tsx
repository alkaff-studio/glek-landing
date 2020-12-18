import React from 'react'
import Image from '../components/img'

const SectionProduct = () => (
    <section id="section-product" className="section">
        <div className="section-element-1">
            <Image src="el-product-01.png" />
        </div>
        <div className="section-element-2">
            <Image src="el-product-02.png" />
        </div>
        <div className="container-fluid">
            <div className="section-title text-center">
                <h5><span className="badge badge-primary">Kategori</span></h5>
                <h4 className="typo-display-md-bold typo-gray-body">Glek Menu</h4>
            </div>
            <div className="section-content"></div>
        </div>
    </section>
)

export default SectionProduct