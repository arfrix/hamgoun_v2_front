import React from 'react'

export default function HeaderBodyFooterLayout({children}) {
    return (
        <section className="HBF-main">
            <article className="HBF-main__header">
                {/* <Header/> */}
            </article>
            <article className="HBF-main__body">
                {children}
            </article>
            <article className="HBF-main__footer">
                {/* <Footer/> */}
            </article>
        </section>
    )
}
