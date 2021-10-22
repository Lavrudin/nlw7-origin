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
