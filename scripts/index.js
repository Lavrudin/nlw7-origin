const linksSocialMedia = {
  github: "Lavrudin",
  youtube: "PinguimCriativo",
  instagram: "durvalhenriquesouza",
  facebook: "pinguimcriativo",
  twitter: "lavrudinho",
};

let { github, youtube, instagram, facebook, twitter } = linksSocialMedia;

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();
