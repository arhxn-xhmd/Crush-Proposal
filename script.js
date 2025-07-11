let body = document.querySelector("body");

function objectCreator(src, msg1, msg2, class1, class2) {
    let cont = document.createElement("div");
    cont.setAttribute("class", "container");
    body.append(cont);

    let video = document.createElement("video");
    video.setAttribute("src", src);
    video.setAttribute("width", "300");
    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
    video.setAttribute("loop", "");
    cont.append(video);

    let statement1 = document.createElement("h2");
    statement1.innerText = msg1;
    cont.append(statement1);

    let statement2 = document.createElement("h3");
    statement2.innerText = msg2;
    cont.append(statement2);

    let btns = document.createElement("div");
    btns.setAttribute("class", "btns");
    cont.append(btns);

    let btn1 = document.createElement("button");
    btn1.setAttribute("class", class1);
    btn1.innerText = "Yes";
    btns.append(btn1);

    let btn2 = document.createElement("button");
    btn2.setAttribute("class", class2);
    btn2.innerText = "No";
    btns.append(btn2);
}

function acceptProposal() {
    let acceptBtn = document.querySelector(".accept-btn:last-of-type");  // ✅ Changed here
    acceptBtn.addEventListener("click", () => {
        let container = document.querySelector(".container");
        container.remove();

        let floatingRejectBtn = document.querySelector(".reject-btn");
        if (floatingRejectBtn) {
            floatingRejectBtn.remove();
        }

        let cont = document.createElement("div");
        cont.setAttribute("class", "container");
        body.append(cont);

        let video = document.createElement("video");
        video.setAttribute("src", "assets/video 5.mp4");
        video.setAttribute("width", "400");
        video.setAttribute("autoplay", "");
        video.setAttribute("muted", "");
        video.setAttribute("loop", "");
        cont.append(video);

        let statement = document.createElement("h2");
        statement.innerText = "I knew it! You love me a lot! 💖😘";
        cont.append(statement);
    });
}

// Initial screen
objectCreator("assets/Video 1.mp4", "Do you love me? 🫠", "Chiku is all yours", "accept-btn", "reject-btn1");
acceptProposal();  // ✅ Must be called after objectCreator

let rejectBtn1 = document.querySelector(".reject-btn1");
rejectBtn1.addEventListener("click", () => {
    let container = document.querySelector(".container");
    container.remove();
    objectCreator("assets/Video 2.mp4", "Please think again! 🙄", "Itni jaldi na matt bolo😢", "accept-btn", "reject-btn2");
    acceptProposal();  // ✅

    let rejectBtn2 = document.querySelector(".reject-btn2");
    rejectBtn2.addEventListener("click", () => {
        let container = document.querySelector(".container");
        container.remove();
        objectCreator("assets/Video 3.mp4", "Ek aur baar soch lo! 😣", "Kyu aisa kar rhi ho Plzz maan jao 😣", "accept-btn", "reject-btn3");
        acceptProposal();  // ✅

        let rejectBtn3 = document.querySelector(".reject-btn3");
        rejectBtn3.addEventListener("click", () => {
            let container = document.querySelector(".container");
            container.remove();
            objectCreator("assets/Video 4.mp4", "Baby maan jao na! Kitne bhaav khaogi! 😭", "Bohot galat baat hai yrr! 😭 ", "accept-btn", "reject-btn4");
            acceptProposal();  // ✅

            let rejectBtn4 = document.querySelector(".reject-btn4");
            rejectBtn4.addEventListener("click", () => {
                rejectBtn4.remove();

                let rejectBtn = document.createElement("button");
                rejectBtn.setAttribute("class", "reject-btn");
                rejectBtn.style.position = "absolute";
                rejectBtn.innerText = "No";
                body.append(rejectBtn);

                rejectBtn.addEventListener("click", () => {
                    rejectBtn.style.top = `${Math.floor(Math.random() * 100)}vh`;
                    rejectBtn.style.left = `${Math.floor(Math.random() * 100)}vw`;
                });
            });
        });
    });
});