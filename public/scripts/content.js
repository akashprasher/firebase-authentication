var footerAttributes = document.getElementById("attributes");
var displayDetails = document.getElementById("user-details");
var editBioCover = document.getElementById("bio-cover");

displayDetails.innerHTML = `
        <h3 class="heading-main">User Details.</h3>
          <div class="row usr-details mt-5">
            <div class="col-sm-6 p-3">
              <span id="user-img"></span>
            </div>
            <div class="col-sm-6 text-align-l text-vertical p-3">
              <p class="font-weight-bold">Name: <span id="user-name"></span></p>
              <p class="font-weight-bold">Email: <span id="user-email"></span> </p>
              <p class="font-weight-bold">Bio: <span id="user-bio"><span></p>
            </div>
          </div>
          <div class="text-center mt-3">
            <button id="editBioButton" onClick="displayEditArea()" class="btn sign-out-btn">Edit Bio</button>
            <button id="signOutButton" class="btn sign-out-btn">Sign Out</button>
          </div>
`;

editBioCover.innerHTML = `
          <div class="edit-cover">
            <div class="container bio-main--edit">
              <div class="mt-5">
                <a
                  class="cross-top"
                  href="javascript:void(0)"
                  onclick="hideEditArea()"
                  ><i class="far fa-times-circle"></i
                ></a>
              </div>
              <div class="bio-form">
                <form action="javascript:addBio()">
                  <div class="form-group">
                    <label for="Bio">Enter New Bio</label>
                    <textarea class="form-control" id="newBio" rows="3" required></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
`;

footerAttributes.innerHTML = `
          <div class="container text-center">
            <p class="para-main">Source Code:
              <a class="font-weight-bold" target="_blank" href="https://github.com/akashprasher/firebase-authentication">GitHub</a>
              | Picture From
              <a class="font-weight-bold" target="_blank" href="https://freepik.com">Freepik</a>
            </p>
          </div>
`;
