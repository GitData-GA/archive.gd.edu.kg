document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('footerMenu');
    if (container) {
        var content = `
          <div class="row">
              <div class="col" style="text-align: left; font-size:12px;">
                  <p>API</p>
                  <a href="https://archive.gd.edu.kg/sitemap.xml">Sitemap</a><br>
                  <a href="https://archive.gd.edu.kg/check-for-update">Check for update</a><br>
                  <a href="https://archive.gd.edu.kg/metadata.json">Feed</a><br>
                  <a href="https://oai.archive.gd.edu.kg/">OAI-PMH</a>
              </div>
              <div class="col" style="text-align: left; font-size:12px;">
                  <p>Policy</p>
                  <a href="https://www.gd.edu.kg/privacy-policy/" target="_blank">Privacy Policy</a><br>
                  <a href="https://www.gd.edu.kg/cookie-policy/" target="_blank">Cookie Policy</a><br>
              </div>
              <div class="col" style="text-align: left; font-size:12px;">
                  <p>Indexing</p>
                  <a href="https://explore.openaire.eu/search/dataprovider?datasourceId=opendoar____::39799c18791e8d7eb29704fc5bc04ac8" target="_blank">OpenAIRE</a><br>
                  <a href="https://opendoar.ac.uk/repository/11064" target="_blank">OpenDOAR</a><br>
                  <a href="https://roar.eprints.org/24306/" target="_blank">ROAR</a><br>
                  <a href="https://zenodo.org/communities/gitdata/" target="_blank">Zenodo</a>
              </div>
          </div>
        `;
        container.innerHTML = content;
    } else {
        console.error('Container not found. Make sure the div with id "footerMenu" exists.');
    }
});
