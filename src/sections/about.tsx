import React from 'react'
import Image from '../components/img'

const SectionAbout = () => (
    <section id="section-about" className="section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <Image src="img-section-about.png" />
                </div>
                <div className="col-12 col-md-6">
                    <div className="section-title">
                        <h5><span className="badge badge-primary">Sekilas</span></h5>
                        <h6 className="typo-display-md-bold typo-gray-body">Tentang Glek</h6>
                    </div>
                    <div className="section-content">
                        <p className="typo-text-sm typo-gray-label">
                            Seiring berjalannya waktu, kecenderungan kuliner khususnya minuman sudah bergeser dari pusat perbelanjaan ke ruko-ruko sisi jalan. Kita bisa melihat brand brand besar keluar dari pusat perbelanjaan dan memilih untuk mandiri di ruko sisi jalan.
                        </p>
                        <p className="typo-text-sm typo-gray-label">
                            Oleh karena itu Glek hadir untuk senantiasa mengikuti perkembangan zaman yang semakin cepat berubah. Glek mencoba fokus pada masyarakat kelas sosial menengah. Glek berusaha menghadirkan produk minuman dengan rasa terbaik dan authentic namun dengan harga terjangkau.
                        </p>
                        <p className="typo-text-sm typo-gray-label">
                            Impian kami, dalam 3 tahun ini, Glek bisa hadir di seluruh wilayah Indonesia. Sebuah kebanggan bagi kami jika bisa bersinergi mengembangkan Glek sehingga bisa menjadi brand kedai minuman nasional pertama milik anak bangsa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default SectionAbout