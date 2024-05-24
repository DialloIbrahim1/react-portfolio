import { EnvironmentFilled, EnvironmentOutlined, LikeOutlined, LinkOutlined, MailOutlined } from '@ant-design/icons';
import './App.css';
import HeaderComp from "./components/HeaderComp";
import { Button, Divider } from 'antd';

function App() {
  return (

    <>
   
    <div className='main'>
    <HeaderComp/>
    <div className='body-container'>
      <div className='left'>
        <section className='about'>
          <article>
            <h2>A propos de moi</h2>
              <p>À propos de moi
                Bonjour et bienvenue sur mon site !

                Je m appelle Ibrahima Diallo, et je suis développeur passionné par la technologie et le développement web. Avec plusieurs années d expérience dans le domaine, j ai eu l opportunité de travailler sur divers projets qui m ont permis de développer une expertise dans plusieurs langages de programmation et frameworks.

                Mon parcours
                Formation : J ai obtenu mon diplôme en informatique, où j ai acquis des connaissances approfondies en développement web, en gestion de bases de données et en conception de logiciels.
                Expérience professionnelle : J ai travaillé dans plusieurs entreprises où j ai eu l occasion de concevoir et de développer des applications web robustes et conviviales. Ces expériences m ont permis de maîtriser des technologies comme HTML, CSS, JavaScript, React, Symfony, Django, et bien d autres.
                Ce que je fais
                Développement Web : Je crée des sites web modernes et réactifs en utilisant les dernières technologies. Que ce soit pour des sites vitrines, des blogs, des boutiques en ligne ou des applications web complexes, je mets un point d honneur à livrer des produits de haute qualité.
                Conception UI/UX : J'aime concevoir des interfaces utilisateur intuitives et esthétiques. Mon objectif est de rendre l'expérience utilisateur agréable et fluide, en tenant compte des besoins et des attentes des utilisateurs finaux.
                Projets personnels : En dehors de mon travail professionnel, j'aime travailler sur des projets personnels qui me permettent d'explorer de nouvelles technologies et d'améliorer continuellement mes compétences. J'ai notamment créé plusieurs applications et sites web pour approfondir mes connaissances et expérimenter de nouvelles idées.
                Mes centres d'intérêt
                Technologie : Je suis constamment à l'affût des nouvelles tendances et innovations technologiques. J'aime expérimenter avec de nouveaux outils et frameworks pour rester à jour dans un domaine en perpétuelle évolution.
                Lecture : J'aime lire des livres sur le développement personnel, la productivité et la technologie. C'est une manière pour moi de continuer à apprendre et de m'inspirer.
                Voyages : Voyager est une de mes passions. Découvrir de nouvelles cultures, rencontrer des personnes de divers horizons et voir le monde sous différentes perspectives m'inspire et enrichit ma vision des choses.
                Contact
                Si vous avez des questions, des suggestions, ou si vous souhaitez collaborer sur un projet, n'hésitez pas à me contacter. Vous pouvez me joindre à [votre adresse email] ou via le formulaire de contact sur ce site.

                Merci de votre visite et au plaisir de vous rencontrer !

                Ibrahima Diallo
              </p>
            </article>
          </section>

          <section className='projects'>
           <h2>Mes recents projets</h2>
           <article>
           <img
           className="featured-img"
            src="https://img.freepik.com/vecteurs-libre/concept-cms-design-plat-illustre_23-2148799071.jpg?t=st=1716127301~exp=1716130901~hmac=bacc31e252b1b1f5a605335aad8b240212e7cb485b3fa265f6a15a1142393dbb&w=996" alt= "slug" />
           <div className='project-info'>
           <h3>Site de gestion de medias sociaux</h3>
           <p>
           Notre site de gestion de médias sociaux est conçu pour être un outil puissant et intuitif, destiné à améliorer votre présence en ligne et à maximiser votre impact sur les réseaux sociaux. Inscrivez-vous dès aujourd'hui et découvrez comment nous pouvons transformer la gestion de vos médias sociaux en une expérience plus simple et plus productive.

           Pour en savoir plus, visitez notre site web [Nom du Site] et commencez à gérer vos médias sociaux avec facilité et efficacité.
           </p>
           <div className='btn-link'>
           <button className='btn' icon={<LikeOutlined/>}> Soutenier mon projet</button>
           </div>
           </div>
           </article>
           <Divider style={{backgroundColor:"#ffffff"}} />
           <article className='article-item'> 

           <div className='left'>
           <img src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg"/>
           </div>

           <div className='left'>
           <h3>Titre</h3>
           <p>
           Bienvenue sur mon portfolio ! Découvrez mes projets, compétences et expériences en développement. Explorez les différentes sections pour en savoir plus sur mon parcours professionnel, mes réalisations et mes ambitions.
           </p>
           <Button type='link' icon={<LinkOutlined/>}> 
           En savoir plus
           </Button>
           
           </div>
           </article>
          </section>
        </div>
      <div className='right'></div>
      <aside>
        <div className='contacts section'>
        <div className='contact-item'>
        <EnvironmentOutlined/>
        <span>Bruxelles, Belgique</span>
        </div>
        <div className='contact-item'>
        <MailOutlined />
        <span><a href="mailto:dia@gmail.com">dial@gmail.com</a></span>
        </div>
        <div className='contact-item'>
        <EnvironmentOutlined/>
        <span>
          <a href='www.monsite.com'>www.monsite.com</a>
        </span>
        <div>
      <h1>Liens Utiles</h1>
      <ul>
        <li><a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">MonCalendrier</a></li>
        <li><a href="http://localhost:3001/" target="_blank" rel="noopener noreferrer">Calculator</a></li>
        <li><a href="http://localhost:3005/" target="_blank" rel="noopener noreferrer">Liste des contacts</a></li>
        <li><a href="http://localhost:3003/" target="_blank" rel="noopener noreferrer">interface</a></li>
        <li><a href="http://localhost:3004/" target="_blank" rel="noopener noreferrer">React multi carousel</a></li>
        <li><a href="http://localhost:3006/" target="_blank" rel="noopener noreferrer">weather</a></li>
      </ul>
      </div>
        </div>
        </div>
        <div className='section'>
         <h2>compétences</h2>
         <p>Langages de programmation : JavaScript, Python, PHP, Java
            Frameworks : React, Django, Symfony, Spring Boot
            Développement web : HTML, CSS, SASS, Bootstrap
            Bases de données : MySQL, PostgreSQL, MongoDB
            Outils de versionnement : Git, GitHub, GitLab
            Méthodologies : Agile, Scrum
            Outils de développement : Visual Studio Code, WebStorm, PyCharm</p>
            <div className='skills-list'>
              <div className='skills-item'>
              <span>PHP & Laravel</span>
              <div className='full'>
                <div className='percent'>

                </div>
              </div>

              </div>
            </div>
      </div>
      </aside>
    </div>
    </div>
    </>
);

}

export default App;
