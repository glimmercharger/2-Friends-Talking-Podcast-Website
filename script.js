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
            bio: "Will keeps the show moving with quick wit, big ideas, and a love for building things. Expect tech tangents, curious questions, and plenty of laughs along the way."
        },
        jay: {
            name: "Jay B",
            role: "Co-host | First Aider",
            bio: "Jay brings calm energy, real-world perspective, and a talent for turning everyday moments into great stories. Honest chats, friendly banter, and good vibes guaranteed."
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
