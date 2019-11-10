import React from "react";
import img_bg from '../../../../assets/img/backgrounds/actuall.jpeg'

const ActuallView = props => {
    return (
        <div className="single_post">
            <div className="container">
                <div className="single_post_image">
                    <div className="">
                        <img src={img_bg} alt="" className="responsive"/>
                    </div>
                </div>
            </div>

            <div className="gap_100"/>

            <div className="container container_small">
                <div className="row">
                    <div className="column col-10 offset-1">
                        <div className="post_content">
                            <h4>Street style paradise</h4>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <blockquote>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                                pain
                                was born.
                            </blockquote>

                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt
                                mollit anim id est laborum.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                            <div className="gap_25"/>

                            <p>
                                <div className="gallery" data-cols="2" data-margin="20" data-ratio="auto">
                                    <div className="entry">
                                        <img src="assets/img/blog/single-post-01.jpg" alt="" className="responsive"/>
                                    </div>
                                    <div className="entry">
                                        <img src="assets/img/blog/single-post-02.jpg" alt="" className="responsive"/>
                                    </div>
                                </div>
                            </p>

                            <div className="gap_25"/>

                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id
                                est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu
                                fugiat nulla pariatur.</p>

                            <div className="gap_25"/>

                            <p className="tags">
                                <i className="fa fa-tags"/>
                                <a href="#" className="link">Design</a>
                                <a href="#" className="link">Tech</a>
                                <a href="#" className="link">Tips</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gap_100"/>

            <div className="project_navigation clearfix">
                <a href="project-4.html" className="prev">
                    <span className="meta">Prev</span>
                    <span className="title">The best redheads of all time</span>
                </a>
                <a href="project-2.html" className="next">
                    <span className="meta">Next</span>
                    <span className="title">The purpose of your brand</span>
                </a>
            </div>
        </div>
    )
}

ActuallView.propTypes = {

}

export default ActuallView;