// components
import Elly from '../../components/Elly'

import './index.css'
// styles

// assets

import Gods from './assets/image-gods.png'
import gGod1 from './assets/deus1.png'
import gGod2 from './assets/deus2.png'
import gGod3 from './assets/deus3.png'
import sExample1 from './assets/example.png'
import sExample2 from './assets/example2.png'
import sExample3 from './assets/example3.png'

export default function Home() {
    return (
        <main>
            <section className="h-section">
                <div className="h-section-pre">
                    <h1 className="h-title">Dystovia RPG</h1>
                    <h3 className="h-subtitle">Inicie sua nova jornada aqui.</h3>
                    <h4 className="h-paragraph">Um novo mundo espera por você, faça parte do Dystovia.</h4>
                    <h4 className="h-paragraph">Um original MMORPG, contendo missões, dungeons, economia e muito mais.</h4>
                    <h4 className="h-paragraph">crie sua propria história diante de todos.</h4>
                
                    <div className="h-section-buttons">
                        <a href=""><button>Adicionar Dystovia</button></a>
                        <a href=""><button>Entrar no Servidor</button></a>
                    </div>
                </div>
                
                <img src={Gods} alt="Dystovia - Gods" className="h-section-gods"/>
            </section>

            <Elly desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam blanditiis sapiente quis at architecto ad, neque vitae reprehenderit culpa nisi magni perspiciatis voluptates repudiandae dolorum error aspernatur et! Adipisci, quam!" mudarlado = {false}/>

            <section className="h-system-examples">
                <div className="h-example">
                    <div className="h-example-text">
                        <h1>Perfil e estatísticas</h1>
                        <p>Veja as estatísticas do seu personagem e de outros jogadores como, emblemas, classe, religião, habilidades, equipamentos e rankings mundiais.</p>
                    </div>
                    
                    <img src={sExample1} alt="Dystovia - Example"/>
                </div>
                <div className="h-example">
                    <img src={sExample2} alt="Dystovia - Example"/>
                    <div className="h-example-text">
                        <h1>Missões e.. recompensas</h1>
                        <p>Que tal realizar missões e ganhar recompensas? Vá até a taverna da Elly e ela com toda certeza vai ter alguma missão para você. Lembre-se que as missões podem ter níveis diferentes então.. cuidado ao escolher uma missão muito difícil, geralmente quem faz essa escolha não volta para sua casa.</p>
                    </div>
                </div>
                <div className="h-example">
                    <div className="h-example-text">
                        <h1>Picaretas?</h1>
                        <p>Você vai precisar comprar novos equipamentos com o ferreiro, e para isso vai ser necessário minerar. Mas não é tao simples assim. Caso erre ao minerar você perderá a sua picareta e vai entrar em um cooldown.. definitivamente isso não é legal.</p>
                    </div>
                    <img src={sExample3} alt="Dystovia - Example" />
                </div>
            </section>

            <section className="h-about-gods">
                <p className="h-title-gods">Deuses</p>
                <section className="h-cards-gods">
                    <div className="h-cardgod">
                        <h2>Olesram</h2>
                        <p>Deus Dragão</p>
                        <img src={gGod1} alt="Dystovia - Deus 1"/>
                    </div>
                    <div className="h-cardgod">
                        <h2>Moon</h2>
                        <p>Deusa da criação</p>
                        <img src={gGod2} alt="Dystovia - Deus 2" />
                    </div>
                    <div className="h-cardgod">
                        <h2>Imoan</h2>
                        <p>Deusa dos demônios</p>
                        <img src={gGod3} alt="Dystovia - Deus 3" />
                    </div>
                </section>
                
            </section>
            
            <Elly desc = "O Dystovia possui alguns Deuses, eles são extremamentes poderosos! mas eles necessitam de seguidores fiéis. Você pode se tornar um(a) seguidor(a) de algum Deus e ganhar recompensas e apoio em batalhas como dungeons, missões e etc." mudarlado = {true}/>

            <section className="h-end">
                <img src={Gods} alt="Dystovia - Elly" />
                <div className="h-content">
                    <h1>Pronto para começar ?</h1>
                    <p>Adicione o Dystovia em seu servidor Discord ou entre no servidor oficial e começe a aventura!</p>
                    <div className="h-end-buttons">
                        <a href=""><button>Adicionar Dystovia</button></a>
                        <a href=""><button>Entrar no Servidor</button></a>
                    </div>
                </div>
            </section>
        </main>
    )
}