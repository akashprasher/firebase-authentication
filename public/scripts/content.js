var footerAttributes = document.getElementById("attributes");
var displayDetails = document.getElementById("user-details");

displayDetails.innerHTML = `
        <h3 class="heading-main">User Details.</h3>
          <div class="row usr-details mt-5">
            <div class="col-sm-6 p-3">
              <span id="user-img"></span>
            </div>
            <div class="col-sm-6 text-align-l text-vertical p-3">
              <p class="font-weight-bold">Name: <span id="user-name"></span></p>
              <p class="font-weight-bold">
                Email: <span id="user-email"></span>
              </p>
            </div>
          </div>
          <div class="text-center mt-5">
            <button id="signOutButton" class="btn sign-out-btn">
              Sign Out
            </button>
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
