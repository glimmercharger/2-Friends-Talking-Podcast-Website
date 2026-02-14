document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("host-modal");
    const modalTitle = document.getElementById("host-modal-title");
    const modalRole = document.getElementById("host-modal-role");
    const modalBio = document.getElementById("host-modal-bio");
    const closeButton = modal?.querySelector(".modal-close");
    const hostButtons = document.querySelectorAll(".host-card--trigger");

    const hostDetails = {
        will: {
            name: "Will K",
            role: "Host | Your resident coder",
            bio: "Will is the host of the show. He brings the fun and random energy. Will, when he's not podcasting, Loves to play cosy games like Animal Crossing New Horizons, and is a big fan of all things Nintendo. He also loves to cycle and code! Will also edits our episodes and is incharge of our social media. A quote he lives by is \"Never put off until tomorrow what can be done today\" (By the way yes I know this is from Ninjago)."
        },
        jay: {
            name: "Jay B",
            role: "Co-host | First Aider",
            bio: "Jay is the co-host of the show. He is a first aider with St. John's Ambulance. He is also a big fan of all things Roblox! In his free time, Jay loves to drink Starbucks and learn about first aid. A quote he lives by is \"Always be dreaming as it could be the next big thing.\"."
        }
    };

    const openModal = (hostKey) => {
        const details = hostDetails[hostKey];
        if (!details || !modal) {
            return;
        }

        modalTitle.textContent = details.name;
        modalRole.textContent = details.role;
        modalBio.textContent = details.bio;
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
    };

    const closeModal = () => {
        if (!modal) {
            return;
        }

        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
    };

    hostButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const hostKey = button.getAttribute("data-host");
            if (hostKey) {
                openModal(hostKey);
            }
        });
    });

    closeButton?.addEventListener("click", closeModal);

    modal?.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal?.classList.contains("is-open")) {
            closeModal();
        }
    });
});
