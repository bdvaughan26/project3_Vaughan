"use strict";

window.addEventListener("load", createLightbox);

function createLightbox() {
   let lightBox = document.getElementById("lightbox");

   let lbTitle = document.createElement("h1");
   let lbPrev = document.createElement("div");
   let lbNext = document.createElement("div");
   let lbImages = document.createElement("div");

   lightBox.appendChild(lbTitle);
   lbTitle.id = "lbTitle";
   lbTitle.textContent = lightboxTitle;

   lightBox.appendChild(lbPrev);
   lbPrev.id = "lbPrev";
   lbPrev.innerHTML = "&#9664;";
   lbPrev.onclick = showPrev;

   lightBox.appendChild(lbNext);
   lbNext.id = "lbNext";
   lbNext.innerHTML = "&#9654;";
   lbNext.onclick = showNext;

   lightBox.appendChild(lbImages);
   lbImages.id = "lbImages";

   for (let i = 0; i < imgCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.onclick = createOverlay;
      lbImages.appendChild(image);
   }

   function showNext() {
      lbImages.appendChild(lbImages.firstElementChild);
   }

   function showPrev() {
      lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
   }

   function createOverlay() {
      let overlay = document.createElement("div");
      overlay.id = "lbOverlay";

      let figureBox = document.createElement("figure");
      overlay.appendChild(figureBox);

      let overlayImage = this.cloneNode(true);
      figureBox.appendChild(overlayImage);

      let overlayCaption = document.createElement("figcaption");
      overlayCaption.textContent = this.alt;
      figureBox.appendChild(overlayCaption);

      let closeBox = document.createElement("div");
      closeBox.id = "lbOverlayClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function() {
         document.body.removeChild(overlay);
      };

      overlay.appendChild(closeBox);
      document.body.appendChild(overlay);
   }
}