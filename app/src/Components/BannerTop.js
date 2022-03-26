import "../css/style.css"
import "../css/bootstrap-grid.min.css"
import "../css/ionicons.min.css"
import "../css/plyr.css"

export default function BannerTop(props){


    return(
        <section className="section section--first section--bg" data-bg="img/section/section.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section__wrap">
                            <h2 className="section__title">{props.title}</h2>
                            {/* <ul className="breadcrumb">
                                <li className="breadcrumb__item"><a>Home</a></li>
                                <li className="breadcrumb__item breadcrumb__item--active">Now Showing</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
	    </section>
    )


}

