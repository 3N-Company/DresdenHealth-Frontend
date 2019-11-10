import React from "react";
import img_bg from '../../../../assets/img/backgrounds/actuall.jpg'

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
                            <h4>Vaccination</h4>

                            <p>The German Vaccination Commission recommends immunisation against the following diseases: </p>

                            <ul style={{listStyle: "inside"}}>
                                <li>Tetanus</li>
                                <li>Diphteria</li>
                                <li>Whooping Cough (pertussis)</li>
                                <li>Haemophilus Influenzae b (Hib)</li>
                                <li>Polio (poliomyelitis)</li>
                                <li>Hepatitis B</li>
                                <li>Pneumococcus (Streptococcus pneumoniae)</li>
                                <li>Rotavirus</li>
                                <li>Meningococcus C (Neisseria meningitidis)</li>
                                <li>Measles</li>
                                <li>Mumps</li>
                                <li>Rubella</li>
                                <li>Chickenpox</li>
                            </ul>

                            <p>
                                For <b>elderly people</b> and <b>pregnant</b> women, the Vaccination Commission recommends inoculation against the flu (influenza).
                                Young women are advised to get vaccinated against cervical cancer (triggered by the human papillomavirus or HPV).
                            </p>
                            <h4>Impfpass</h4>
                            <p>
                                When you are vaccinated for the first time in Germany, you will receive a yellow booklet
                                which is called “vaccination record” (“Impfpass”, “Impfausweis” or “Impfbuch”). All your
                                inoculations will be recorded in this booklet which helps you keep track of the
                                immunisation schedule. You should bring your vaccination record along to all your
                                medical appointments. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap_100"/>
        </div>
    )
}

ActuallView.propTypes = {

}

export default ActuallView;