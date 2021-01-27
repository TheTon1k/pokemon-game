import s from './Layout.module.css'


const Layout =(props) =>{
    const background = {background:`url(${props.urlBg}) bottom/100% no-repeat`,backgroundColor:`${props.colorBg}`}
    return <section className={s.root} id={props.id} style={background}>
        <div className={s.wrapper} >
            <article>
                <div className={s.title}>
                        <h3>{props.title}</h3>
                    <span className={s.separator}></span>
                </div>
                <div className={s.desc+' '+s.full}>
                    <p>{props.descr}</p>
                </div>
            </article>
        </div>
    </section>
}

export default Layout