import React from 'react'
import Header from '../blocks/header/HeaderView'
import Footer from '../blocks/footer/FooterView'

export default function HeaderBodyFooterLayout({children}) {
    return (
        <section className="HBF-main">
            <article className="HBF-main__header">
                <Header/>
            </article>
            <article className="HBF-main__body">
                {children}
            </article>
            <article className="HBF-main__footer">
                <Footer/>
            </article>
        </section>
    )
}
