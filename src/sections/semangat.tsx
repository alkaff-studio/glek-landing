import React from 'react'
import { Button } from 'react-bootstrap'
import Image from '../components/img'

interface SectionSemangatProps {
    youtubeUrl?: string | null
}
export const SectionSemangat = () => (
    <section id="section-semangat" className="section">
        <div className="container-fluid px-0">
            <div className="row align-items-center no-gutters">
                <div className="col-12 col-md-5">
                    <div className="section-content ml-md-5 pl-md-5">
                        <div className="section-title">
                            <h2><span className="badge badge-primary">#</span></h2>
                            <h4 className="typo-display-md-bold typo-gray-body">Semangat Berbagi Glek</h4>
                        </div>
                        <p className="typo-text-md typo-gray-label">
                            Moment yang begitu berkesan, disini kita bisa saling berbagi kebaikan dan memberikan motivasi.
                        </p>
                        <p className="typo-text-md typo-gray-label">
                            Ketika motivasi itu diberikan maka semangat yang hebat mampu membatalkan kegagalan dan bisa menjadi obat untuk menyembuhkan mereka yang kurang percaya diri&kurang memiliki keyakinan untuk menjadi lebih baik😊
                        </p>
                        <Button variant="primary" href="https://www.instagram.com/explore/tags/semangatberbagiglek/" target="_blank">Lihat Hashtag</Button>
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <Image src="img-section-semangat.png" />
                </div>
            </div>
            <div className="section-img">
                <div className="element-1">
                    <Image src="el-semangat-01.png" />
                </div>
            </div>
        </div>
    </section>
)