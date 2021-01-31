import s from './Layout.module.css'


const Layout =({id,title,urlBg,colorBg,children}) =>{
    const background = {background:`url(${urlBg}) left bottom fixed`,backgroundColor:`${colorBg}`}
    return <section className={s.root} id={id} style={background}>
        <div className={s.wrapper} >
            <article>
                <div className={s.title}>
                        <h3>{title}</h3>
                    <span className={s.separator}></span>
                </div>
                <div className={s.desc+' '+s.full}>
                    {children}
                </div>
            </article>
        </div>
    </section>
}

export default Layout