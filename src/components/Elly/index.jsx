import iElly from './elly.png'

// styles
import './index.css'

export default function Elly({desc, mudarlado}) {
    return (
        <>
            {!mudarlado && (
                <section className="h-elly-section">
                <img src={iElly} alt="Dystovia - Elly" className="h-elly" />
                <div className="h-elly-parag">
                    <h3>Olá, aventureiro(a) !</h3>
                    <p>{desc}</p>

                    <p className="h-deelly">~ Elly</p>
                </div>
                </section>
            )}
            {mudarlado && (
                <section className="h-elly-section">
                    <div className="h-elly-parag">
                        <h3>Sobre os Deuses</h3>
                        <p>{desc}</p>
                        <p className="h-deelly">~ Elly</p>
                    </div>
                    <img src={iElly} alt="Dystovia - Elly" className="h-elly" />
                </section>
            )}
        </>
    )
}