import intro from "./intro-data.js";

let data = intro[0];

const hoursDisplay = new Date().getHours();

document.addEventListener("DOMContentLoaded", () => {
    if (hoursDisplay >= 0 && hoursDisplay < 3) {
        data = intro[0];

        createHtmlContent(data.introBGClass, data.introBG, data.introBGAlt, data.introImage, data.introImageAlt, data.introImageWidth, data.introImageHeight, data.introText);
    } else if (hoursDisplay >= 3 && hoursDisplay < 7) {
        data = intro[1];

        createHtmlContent(data.introBGClass, data.introBG, data.introBGAlt, data.introImage, data.introImageAlt, data.introImageWidth, data.introImageHeight, data.introText);
    } else if (hoursDisplay >= 7 && hoursDisplay < 12) {
        data = intro[2];

        createHtmlContent(data.introBGClass, data.introBG, data.introBGAlt, data.introImage, data.introImageAlt, data.introImageWidth, data.introImageHeight, data.introText);
    } else if (hoursDisplay >= 12 && hoursDisplay < 14) {
        data = intro[3];

        createHtmlContent(data.introBGClass, data.introBG, data.introBGAlt, data.introImage, data.introImageAlt, data.introImageWidth, data.introImageHeight, data.introText);
    } else if (hoursDisplay >= 14 && hoursDisplay < 18) {
        data = intro[4];

        createHtmlContent(data.introBGClass, data.introBG, data.introBGAlt, data.introImage, data.introImageAlt, data.introImageWidth, data.introImageHeight, data.introText);
    } else if (hoursDisplay >= 18 && hoursDisplay < 20) {
        data = intro[5];

        createHtmlContent(data.introBGClass, data.introBG, data.introBGAlt, data.introImage, data.introImageAlt, data.introImageWidth, data.introImageHeight, data.introText);
    } else if (hoursDisplay >= 20 && hoursDisplay < 22) {
        data = intro[6];

        createHtmlContent(data.introBGClass, data.introBG, data.introBGAlt, data.introImage, data.introImageAlt, data.introImageWidth, data.introImageHeight, data.introText);
    } else if (hoursDisplay >= 22 && hoursDisplay < 24) {
        data = intro[7];

        createHtmlContent(data.introBGClass, data.introBG, data.introBGAlt, data.introImage, data.introImageAlt, data.introImageWidth, data.introImageHeight, data.introText);
    }
});

function createHtmlContent(sectionClass, bgSrc, bgAlt, imageSrc, imageAlt, imageWidth, imageHeight, introText) {
    let introSection = document.querySelector("#introSection");

    introSection.innerHTML = "";

    let newHtml = `
  <div class="intro__bg ${sectionClass}">
    <picture>
      <source srcset="${bgSrc}?as=avif&width=1920&height=1280" type="image/avif" class="intro__bg--image" height="1280" width="1920" />
      <source srcset="${bgSrc}?as=webp&width=1920&height=1280" type="image/webp" class="intro__bg--image" height="1280" width="1920" />
      <source srcset="${bgSrc}?width=1920&height=1280" type="image/jpeg" class="intro__bg--image" height="1280" width="1920" />
      <img src="${bgSrc}?width=1920&height=1280" alt="${bgAlt}" class="intro__bg--image" height="1280" width="1920" />
    </picture>
    <div class="intro__container">
      <div class="intro__full-height container">
        <div class="columns intro__full-height intro__columns">
          <div class="column--2 column intro__left-column">
          <picture>
            <source srcset="${imageSrc}?as=avif&width=${imageWidth}&height=${imageHeight}" type="image/avif" height=${imageHeight} width=${imageWidth} />
            <source srcset="${imageSrc}?as=webp&width=${imageWidth}&height=${imageHeight}" type="image/webp" height=${imageHeight} width=${imageWidth} />
            <source srcset="${imageSrc}?width=${imageWidth}&height=${imageHeight}" type="image/jpeg" height=${imageHeight} width=${imageWidth} />
            <img src="${imageSrc}?width=${imageWidth}&height=${imageHeight}" alt="${imageAlt}" height=${imageHeight} width=${imageWidth}/>
          </picture>
          </div>
          <div class="column--2 column intro__right-column">
            <span class="intro__text intro__colour">
              hello ${introText}, I am ...
            </span>
            <h1 class="intro__heading">rejaur rahman</h1>
            <h2 class="intro__subheading intro__colour">I live and breathe being a front-end web developer.</h2>
          </div>
        </div>
      </div>
    </div>
  </div>`;

    introSection.innerHTML = newHtml;
}