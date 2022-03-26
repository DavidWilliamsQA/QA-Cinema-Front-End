import React from "react"
import "../css/style.css"
import "../css/bootstrap-grid.min.css"
import "../css/ionicons.min.css"
import "../css/plyr.css"

export default function Filter(){


    return (
    <div className="filter">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="filter__content">

						<div className="filter__items">

							<div className="filter__item" id="filter__genre">
								<span className="filter__item-label">GENRE:</span>

								<div className="filter__item-btn dropdown-toggle" role="navigation" id="filter-genre" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<input type="button" value="Select Genre" id="selectGenre"/>
									<span></span>
								</div>

								<ul className="filter__item-menu dropdown-menu scrollbar-dropdown" aria-labelledby="filter-genre">
									<li className="genre_selector">Action</li>
									<li className="genre_selector">Adventure</li>
									<li className="genre_selector">Animals</li>
									<li className="genre_selector">Animation</li>
									<li className="genre_selector">Biography</li>
									<li className="genre_selector">Comedy</li>
									<li className="genre_selector">Cooking</li>
									<li className="genre_selector">Crime</li>
									<li className="genre_selector">Dance</li>
									<li className="genre_selector">Documentary</li>
									<li className="genre_selector">Drama</li>
									<li className="genre_selector">Education</li>
									<li className="genre_selector">Family</li>
									<li className="genre_selector">Fantasy</li>
									<li className="genre_selector">History</li>
									<li className="genre_selector">Horror</li>
									<li className="genre_selector">Kids</li>
									<li className="genre_selector">Medical</li>
									<li className="genre_selector">Music</li>
									<li className="genre_selector">Musical</li>
									<li className="genre_selector">Nature</li>
									<li className="genre_selector">Paranormal</li>
									<li className="genre_selector">Politics</li>
									<li className="genre_selector">Racing</li>
									<li className="genre_selector">Romance</li>
									<li className="genre_selector">Science</li>
									<li className="genre_selector">Science Fiction</li>
									<li className="genre_selector">Science</li>
									<li className="genre_selector">Thriller</li>
									<li className="genre_selector">Travel</li>
									<li className="genre_selector">War/Military</li>
									<li className="genre_selector">Western</li>
								</ul>
							</div>

							<div className="filter__item" id="filter__rate">
								<span className="filter__item-label">VIEWER RATING:</span>

								<div className="filter__item-btn dropdown-toggle" role="button" id="filter-rate" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<div className="filter__range">
										<div id="filter__imbd-start"></div>
										<div id="filter__imbd-end"></div>
									</div>
									<span></span>
								</div>

								<div className="filter__item-menu filter__item-menu--range dropdown-menu" aria-labelledby="filter-rate">
									<div id="filter__imbd"></div>
								</div>
							</div>

							<div className="filter__item" id="filter__year">
								<span className="filter__item-label">RELEASE YEAR:</span>

								<div className="filter__item-btn dropdown-toggle" role="button" id="filter-year" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<div className="filter__range">
										<div id="filter__years-start"></div>
										<div id="filter__years-end"></div>
									</div>
									<span></span>
								</div>

								<div className="filter__item-menu filter__item-menu--range dropdown-menu" aria-labelledby="filter-year">
									<div id="filter__years"></div>
								</div>
							</div>
						</div>

						<div className="filter__item">
							<span className="filter__item-label">REFINE SEARCH:</span>
							<div className="filter__item-btn dropdown-toggle">
								<input className="sign__input" type="text" placeholder="Search Term" id="searchBox2"/>
							</div>
						</div>

						<button className="filter__btn" type="reset" id="resetButton" href="search.html">reset</button>

					</div>
				</div>
			</div>
		</div>
	</div>
    )
}