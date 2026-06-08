import './Section.css'
import beijaFlor from '../images/beija-flor (1).png'
import flores from '../images/flores (1).png'
import cogumelo from '../images/cogumelo (1).png'

function Section(){
    return(
        <div className='quadro'> 
            <div className='flor-container'></div>

            <section className='quadro-completo'>
                <div className='container'>

                    <div className='stat-item circulo'>
                        <h1>124.000</h1>
                        <p>espécies da fauna</p>
                        <img src={beijaFlor} alt="Beija-flor" />
                    </div>

                    <div className='stat-item circulo'>
                        <h1>44.000</h1>
                        <p>espécies da flora</p>
                        <img src={flores} alt="Flores" />
                    </div>

                    <div className='stat-item circulo'>
                        <h1>8.000</h1>
                        <p>fungos conhecidos</p>
                        <img src={cogumelo} alt="Cogumelo" />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Section;