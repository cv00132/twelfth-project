import token from "./token";
import $ from "jquery";
//console.log(token);

var BASE_URL = "https://api.github.com";

function userData (data, callback) {
  return $.ajax({
    url: `${BASE_URL}/users/cv00132`,
    dataType: "json",
    headers: {
      "Authorization": `token ${token}`
    },
    success: showData,
    data: {
      q: data
    }
  });
}

function showData (data) {
return {
  name: data.name,
  userImage: data.avatar_url,
  bio: data.bio,
  email: data.email,
  website: data.blog,
  company: data.company,
  gh_url: data.html_url,
  }
}

export { userData, showData };
