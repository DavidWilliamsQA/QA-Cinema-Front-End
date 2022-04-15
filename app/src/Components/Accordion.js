
export default function Accordion({showTimes}){
    
    return(
        <div className="accordion__card">
            <div class="card-header" id={`heading${showTimes.id}`}>
                    <button type="button" data-toggle="collapse" data-target={`#collapse${showTimes.id}`} aria-expanded="true" aria-controls={`collapse${showTimes.id}`}>
                        <span>{showTimes.time.split(" ")[0]}</span>
                    </button>
            </div>

            <div id={`collapse${showTimes.id}`} class="collapse show" aria-labelledby={`heading${showTimes.id}`} data-parent="#accordion">
                    <div class="card-body">
                        <table class="accordion__list">
                            <tbody>
                                <tr>
                                    <th>{showTimes.time.split(" ")[1]}<a class="sign__btn1" href="">Book now</a></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>

        </div>
    )
}