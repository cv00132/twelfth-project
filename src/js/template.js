import $ from "jquery";
import { showData } from "./main";


function resultsTemplate(showData) {
    var html = `
    <div class= "hero-body level-item has-text-centered title is-1">
      ${showData.name}
    </div>
    <div class="columns">
      <div class="column">
        <div class = "image">
          <img src="${showData.avatar_url}">
        </div>
      </div>
        <div class = "column hero-body">
          <h1 class="is-centered">
              The
              <span>
              Basics
            </span>
          </h1>
            <li class= "">
              Name: ${showData.name}
            </li>
            <li class= "">
              Github URL: ${showData.html_url}
            </li>
            <li class= "">
              Email: ${showData.email}
            </li>
            <li class= "">
              Company: ${showData.company}
            </li>
            <li class= "">
              Website: ${showData.blog}
            </li>
      </div>
      <div class="column hero-body">
        <div class="is-large">
          <h1>
          The
            <span>
          Story
            </span>
          </h1>
          <br>
          ${showData.bio}
        </div>
      </div>
    </div>
    `
    $(".container").append(html);
};

export { resultsTemplate };
