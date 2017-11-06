import React from "react";
import PageHeader from "../template/pageHeader";

export default props => (
  <div>
    <PageHeader name="Sobre" small="Nós" />
    <h2>Glaucia Lemos</h2>
    <p>Software Engineer & Microsoft MVP apaixonada pelo que faz!</p>

    <h2>Contribuições Técnicas/Links Importantes:</h2>
    <ul>
      <li>
        Site Técnico: <a href="www.code4coders.wordpress.com">Code4Coders</a>
      </li>
      <li>
        Youtube:<a href="https://www.youtube.com/user/l32759">
          Canal Youtube - Glaucia Lemos
        </a>
      </li>
      <li>
        GitHub: <a href="https://github.com/glaucia86/">Repositório GitHub</a>
      </li>
      <li>
        Curso TypeScript - Udemy:<a href="https://www.udemy.com/curso-typescript-para-desenvolvedores-c">
          Curso TypeScript - Glaucia Lemos
        </a>
      </li>
    </ul>

    <h2>Informações sobre a App Desenvolvida:</h2>
    <ul>
      <li>Node.Js</li>
      <li>React</li>
      <li>Redux</li>
      <li>Express.Js</li>
      <li>MongoDb</li>
      <li>Mongoose</li>
      <li>Visual Studio Code</li>
    </ul>
    <p>
      Mais Informações:<a href="https://github.com/glaucia86/desafio-gupy-glaucia">
        AQUI
      </a>
    </p>
  </div>
)
